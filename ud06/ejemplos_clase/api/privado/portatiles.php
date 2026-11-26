<?php
// API de los portátiles con sesión: http://localhost:8000/api/privado/portatiles.php
//
// Hace exactamente lo mismo que ../portatiles.php (GET, POST, PUT y DELETE,
// con los mismos códigos), pero solo si la petición trae la cabecera
//   Authorization: Bearer <token>
// con el token de una sesión abierta en ../sesion.php.
// Sin ella, cualquier método contesta 401.

require_once __DIR__ . '/../conexion.php';

exigirSesion($pdo);

require __DIR__ . '/../portatiles.php';
