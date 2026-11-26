<?php
// Sesión de la API: http://localhost:8000/api/sesion.php
//
//   POST   sesion.php   → inicia sesión. Recibe en el cuerpo, en JSON:
//                           { "usuario": "secretaria", "clave": "gcapitan26" }
//                         200 y { "token": "…", "nombre": "Secretaría" }
//                         401 si el usuario o la contraseña no son correctos
//   DELETE sesion.php   → cierra la sesión del token que llega en la cabecera
//                         Authorization: Bearer …
//                         200 y un mensaje, o 401 si no llega un token válido
//   cualquier otro método → 405
//
// El token es una cadena aleatoria de 64 caracteres. Se guarda en la tabla
// sesiones y sirve hasta que se cierra la sesión.

require_once __DIR__ . '/conexion.php';

$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) {

    case 'POST':
        $datos = json_decode(file_get_contents('php://input'), true);
        $usuario = $datos['usuario'] ?? '';
        $clave   = $datos['clave'] ?? '';

        $consulta = $pdo->prepare('SELECT * FROM usuarios WHERE usuario = ?');
        $consulta->execute([$usuario]);
        $fila = $consulta->fetch();

        // password_verify compara la contraseña con la guardada cifrada.
        if (!$fila || !password_verify($clave, $fila['clave'])) {
            responder(401, ['error' => 'Usuario o contraseña incorrectos']);
        }

        $token = bin2hex(random_bytes(32));
        $pdo->prepare('INSERT INTO sesiones (token, usuario_id) VALUES (?, ?)')->execute([$token, $fila['id']]);
        responder(200, ['token' => $token, 'nombre' => $fila['nombre']]);

    case 'DELETE':
        exigirSesion($pdo);
        $pdo->prepare('DELETE FROM sesiones WHERE token = ?')->execute([tokenDeLaPeticion()]);
        responder(200, ['mensaje' => 'Sesión cerrada']);

    default:
        responder(405, ['error' => "Método $metodo no permitido"]);
}
