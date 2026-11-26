-- Base de datos de la UD6: Portátiles GCapitán.
-- MySQL la ejecuta la primera vez que arranca el contenedor db.
-- Para volver a estos datos: docker compose down -v  y  docker compose up -d

SET NAMES utf8mb4;

CREATE TABLE portatiles (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  codigo     VARCHAR(10)  NOT NULL,
  modelo     VARCHAR(60)  NOT NULL,
  estado     ENUM('disponible', 'prestado', 'en reparación') NOT NULL DEFAULT 'disponible',
  prestado_a VARCHAR(80)  NULL
) DEFAULT CHARSET = utf8mb4;

INSERT INTO portatiles (codigo, modelo, estado, prestado_a) VALUES
  ('GC-01', 'Lenovo ThinkPad E14',  'disponible',    NULL),
  ('GC-02', 'Lenovo ThinkPad E14',  'prestado',      'Carmen Ruiz'),
  ('GC-03', 'HP ProBook 440',       'disponible',    NULL),
  ('GC-04', 'HP ProBook 440',       'en reparación', NULL),
  ('GC-05', 'Dell Latitude 3540',   'prestado',      'Antonio Molina'),
  ('GC-06', 'Dell Latitude 3540',   'disponible',    NULL),
  ('GC-07', 'Acer TravelMate P2',   'disponible',    NULL),
  ('GC-08', 'Acer TravelMate P2',   'prestado',      'Lucía Navarro');

-- Usuarios que pueden iniciar sesión. La contraseña se guarda cifrada con
-- password_hash de PHP, nunca tal cual.
--   usuario: secretaria   contraseña: gcapitan26
CREATE TABLE usuarios (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(30)  NOT NULL UNIQUE,
  clave   VARCHAR(255) NOT NULL,
  nombre  VARCHAR(60)  NOT NULL
) DEFAULT CHARSET = utf8mb4;

INSERT INTO usuarios (usuario, clave, nombre) VALUES
  ('secretaria', '$2y$12$fFVAVlKd4C9aCpt8vls4u.K.j3Apfxz1JWHbsZHulG4Un2QyW6OP2', 'Secretaría');

-- Sesiones abiertas: cada inicio de sesión guarda aquí su token, y cerrar la
-- sesión lo borra.
CREATE TABLE sesiones (
  token      CHAR(64) PRIMARY KEY,
  usuario_id INT NOT NULL,
  creada     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE
) DEFAULT CHARSET = utf8mb4;
