<?php
$server = "localhost";
$dbusername = "root";
$dbpassword = "";
$database = "eonlinedb";

$conn = mysqli_connect($server, $dbusername, $dbpassword, $database);
if(!$conn){
    die("Error al conectar a la base de datos: ". mysqli_connect_error());
}

mysqli_set_charset($conn, 'utf8'); // fixes tildes