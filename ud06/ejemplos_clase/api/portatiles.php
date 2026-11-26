<?php
// API de los portátiles: http://localhost:8000/api/portatiles.php
//
// El mismo archivo atiende todas las operaciones sobre la tabla portatiles.
// Cuál hace depende del método de la petición:
//
//   GET    portatiles.php          → 200 y la lista de todos los portátiles
//   GET    portatiles.php?id=3     → 200 y el portátil 3, o 404 si no existe
//   POST   portatiles.php          → 201 y el portátil creado, o 400 si faltan datos
//   PUT    portatiles.php?id=3     → 200 y el portátil 3 cambiado, o 404 si no existe
//   DELETE portatiles.php?id=3     → 200 y un mensaje, o 404 si no existe
//   cualquier otro método          → 405
//
// POST y PUT reciben los datos en el cuerpo, en JSON:
//   { "codigo": "GC-09", "modelo": "HP ProBook 440", "estado": "disponible", "prestado_a": null }
// En PUT basta con enviar los campos que cambian.
// Los errores llegan siempre como { "error": "texto del error" }.

require_once __DIR__ . '/conexion.php';

$metodo  = $_SERVER['REQUEST_METHOD'];
$id      = isset($_GET['id']) ? (int) $_GET['id'] : null;
$estados = ['disponible', 'prestado', 'en reparación'];

// Devuelve el portátil con ese id, o false si no existe.
function buscar(PDO $pdo, int $id)
{
    $consulta = $pdo->prepare('SELECT * FROM portatiles WHERE id = ?');
    $consulta->execute([$id]);
    return $consulta->fetch();
}

// Lee el cuerpo de la petición y lo convierte de JSON a un array de PHP.
function leerCuerpo(): array
{
    $datos = json_decode(file_get_contents('php://input'), true);
    if (!is_array($datos)) {
        responder(400, ['error' => 'El cuerpo de la petición no es un JSON válido']);
    }
    return $datos;
}

switch ($metodo) {

    case 'GET':
        if ($id === null) {
            $lista = $pdo->query('SELECT * FROM portatiles ORDER BY id')->fetchAll();
            responder(200, $lista);
        }
        $portatil = buscar($pdo, $id);
        if (!$portatil) {
            responder(404, ['error' => "No existe ningún portátil con el id $id"]);
        }
        responder(200, $portatil);

    case 'POST':
        $datos = leerCuerpo();
        if (empty($datos['codigo']) || empty($datos['modelo'])) {
            responder(400, ['error' => 'Faltan el código o el modelo']);
        }
        $estado = $datos['estado'] ?? 'disponible';
        if (!in_array($estado, $estados, true)) {
            responder(400, ['error' => 'El estado tiene que ser disponible, prestado o en reparación']);
        }
        $consulta = $pdo->prepare('INSERT INTO portatiles (codigo, modelo, estado, prestado_a) VALUES (?, ?, ?, ?)');
        $consulta->execute([$datos['codigo'], $datos['modelo'], $estado, $datos['prestado_a'] ?? null]);
        responder(201, buscar($pdo, (int) $pdo->lastInsertId()));

    case 'PUT':
        if ($id === null) {
            responder(400, ['error' => 'Falta el id en la dirección: portatiles.php?id=…']);
        }
        $portatil = buscar($pdo, $id);
        if (!$portatil) {
            responder(404, ['error' => "No existe ningún portátil con el id $id"]);
        }
        // Se parte de lo que hay y se cambia solo lo que llega en el cuerpo.
        $nuevo = array_merge($portatil, leerCuerpo());
        if (!in_array($nuevo['estado'], $estados, true)) {
            responder(400, ['error' => 'El estado tiene que ser disponible, prestado o en reparación']);
        }
        $consulta = $pdo->prepare('UPDATE portatiles SET codigo = ?, modelo = ?, estado = ?, prestado_a = ? WHERE id = ?');
        $consulta->execute([$nuevo['codigo'], $nuevo['modelo'], $nuevo['estado'], $nuevo['prestado_a'], $id]);
        responder(200, buscar($pdo, $id));

    case 'DELETE':
        if ($id === null) {
            responder(400, ['error' => 'Falta el id en la dirección: portatiles.php?id=…']);
        }
        if (!buscar($pdo, $id)) {
            responder(404, ['error' => "No existe ningún portátil con el id $id"]);
        }
        $pdo->prepare('DELETE FROM portatiles WHERE id = ?')->execute([$id]);
        responder(200, ['mensaje' => "Portátil $id borrado"]);

    default:
        responder(405, ['error' => "Método $metodo no permitido"]);
}
