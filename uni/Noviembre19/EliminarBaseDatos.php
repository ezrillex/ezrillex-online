<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.4/sweetalert2.all.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <title>Eliminando base de datos</title>
</head>
<body>
<?php
include 'include/config.inc';

$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos);
$consulta = "DROP DATABASE ".$basededatos;

if (mysqli_query($conexion, $consulta)) {
    ?>
    <script>
        swal({
            title: "Hecho",
            text: "La base de datos ha sido eliminada correctamente!",
            type: "success"
        });
    </script>
<?php
} else {
   ?>
    <script>
        swal({
            title: "ERROR!",
            text: "No hay ninguna base de datos, cree una.",
            type: "error"
        }).then(function() {
            window.location = "index.html";
        });
    </script>
<?php
}
mysqli_close($conexion);
?>
</body>
</html>