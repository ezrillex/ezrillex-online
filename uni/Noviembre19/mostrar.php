<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrando datos</title>
</head>
<body>
<?php
include('include/config.inc');
$conexion = mysqli_connect($servidor,$usuario,$password,$basededatos);
mysqli_set_charset($conexion,"utf8");


$query=" call MostrarProductos();";

$resultado=mysqli_query( $conexion, $query ) or die ( "No se pueden mostrar los registros");
?>
<table width='100%' border='1' align='center'>
    <thead>
        <tr>
            <th style="display: none;">Id Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
<?php
while ($row=mysqli_fetch_array($resultado))
{
    ?>

    <tr>
    <td style="display: none;"><?php echo $row['IdProducto'] ?></td>
    <td><?php echo $row['nombre'] ?></td>
    <td><?php echo $row['precio'] ?></td>
    <td><?php echo $row['cantidad'] ?></td>

<!--    <td><a href='eliminar.php?idalumno=".$row['idalumno']."'>Eliminar</a>"."</td>";-->
<!--    <td><a href='modificar.php?idalumno=".$row['idalumno']."'>Modificar</a>"."</td>";-->
        <td><a href="">Eliminar</a></td>
        <td><a href="">Modificar</a></td>
    </tr>
<?php
}
?>
    </tbody>
</table>
<?php
// cerrar conexión de base de datos
mysqli_close( $conexion );

?>
<br><br><br><a href="index.html">Menu</a><br>
</body>
</html>