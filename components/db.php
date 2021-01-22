<?php
$server = "localhost";
$dbusername = "root";
$dbpassword = "";
$database = "eonlinedb";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$conn = mysqli_connect($server, $dbusername, $dbpassword, $database);
if(!$conn){
    die("Error al conectar a la base de datos: ". mysqli_connect_error());
}

mysqli_set_charset($conn, 'utf8'); // fixes tildes