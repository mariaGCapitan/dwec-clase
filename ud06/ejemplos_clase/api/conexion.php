<?php
// Conexión con la base de datos «portatiles» del contenedor db.
// La usan los demás archivos de la API con: require 'conexion.php';
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
