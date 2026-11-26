# Imagen del contenedor web: Apache con PHP 8.4 y la extensión para hablar con MySQL.
FROM php:8.4-apache
RUN docker-php-ext-install pdo_mysql
# Que http://localhost:8000/ muestre la lista de carpetas de los ejemplos.
RUN sed -i 's/Options -Indexes/Options +Indexes/' /etc/apache2/conf-available/docker-php.conf
