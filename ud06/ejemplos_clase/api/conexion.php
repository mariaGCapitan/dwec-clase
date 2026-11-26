<?php
// Conexión con la base de datos «portatiles» del contenedor db.
// La usan los demás archivos de la API con: require_once __DIR__ . '/conexion.php';
// Si no se puede conectar, contesta con el código 500 y un JSON con el error.

header('Content-Type: application/json; charset=utf-8');

try {
    $pdo = new PDO(
        'mysql:host=db;dbname=portatiles;charset=utf8mb4',
        'dwec',
        'dwec',
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            // Para que los números lleguen como números y no como texto.
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::ATTR_STRINGIFY_FETCHES  => false,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'No se puede conectar con la base de datos'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Contesta con un código HTTP y unos datos en JSON, y termina.
function responder(int $codigo, $datos): void
{
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

// Devuelve el token que llega en la cabecera «Authorization: Bearer …»,
// o null si la petición no lo trae.
function tokenDeLaPeticion(): ?string
{
    $cabeceras = array_change_key_case(getallheaders(), CASE_LOWER);
    $autorizacion = $cabeceras['authorization'] ?? '';
    if (preg_match('/^Bearer\s+(\S+)$/', $autorizacion, $partes)) {
        return $partes[1];
    }
    return null;
}

// Comprueba que la petición trae el token de una sesión abierta.
// Si no lo trae, o el token no es de ninguna sesión abierta (por ejemplo,
// porque ya se cerró), contesta 401 y termina. El mensaje es el mismo en los dos casos.
function exigirSesion(PDO $pdo): void
{
    $token = tokenDeLaPeticion();
    if ($token === null) {
        responder(401, ['error' => 'Hay que iniciar sesión']);
    }
    $consulta = $pdo->prepare('SELECT usuario_id FROM sesiones WHERE token = ?');
    $consulta->execute([$token]);
    if (!$consulta->fetch()) {
        responder(401, ['error' => 'Hay que iniciar sesión']);
    }
}
