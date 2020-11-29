<html>
<head>
    <title>Crear BD</title>
</head>
<body >
<h2>Formulario para la Creacion de la Base de Datos</h2><br>
<?php
// conexion a bd
include 'include/config.inc';

// creación de la conexión a la base de datos con mysql_connect()
$conexion = mysqli_connect( $servidor, $usuario, $password) or die ("No se ha podido conectar al servidor de Base de datos");


//Realizando la consulta para crear una BD si es que no existe
$consulta="CREATE DATABASE IF NOT EXISTS ".$basededatos;
$EjecutarConsulta = mysqli_query( $conexion, $consulta ) or die ( "No se pudo crear la base de datos");

//Verificando si la BD se creo.
if ($EjecutarConsulta)
    echo ("La BD fue creada de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la BD.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}


$db = mysqli_select_db($conexion, $basededatos) or die("Upps! no se ha podido conectar a la nueva Base de Datos");

//Realizando la consulta para crear la tabla Alumno si es que no existe
$consulta="CREATE TABLE if not exists tblProducto (IdProducto INT PRIMARY KEY AUTO_INCREMENT, 
nombre varchar(50), precio float, cantidad int)";
$EjecutarConsulta = mysqli_query($conexion, $consulta) or false; //  die ("No se pudo crear la tabla tblProducto")

//Verificando si la tabla se creo.
if ($EjecutarConsulta)
    echo ("La tabla tblAlumno fue creada de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la tblAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}

$consulta="CREATE PROCEDURE if not exists CrearProducto
( 
    IN pnombre VARCHAR(50),
    IN pprecio float,
    IN pcantidad INT
)
insert into tblProducto (nombre,precio,cantidad)
values (pnombre,pprecio,pcantidad)";
$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP CrearProducto");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  CrearProducto fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP CrearProducto.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}




$consulta="CREATE PROCEDURE if not exists ActualizarProducto
 ( 
    IN pidproducto INT,
    IN pnombre VARCHAR(50),
    IN pprecio float,
    IN pcantidad INT
  )
update tblProducto set nombre=pnombre, precio=pprecio,cantidad=pcantidad where IdProducto=pidproducto";
$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP ActualizarProducto");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  ActualizarProducto fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP ActualizarProducto.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}



$consulta="CREATE PROCEDURE if not exists BorrarProducto
 ( 
    IN pidproducto INT
  )
  delete from  tblProducto where IdProducto=pidproducto";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP BorrarProducto");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  BorrarProducto fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP BorrarProducto.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}


$consulta="CREATE PROCEDURE if not exists MostrarProductos
  ( 
    
  )
  SELECT * FROM tblProducto";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP MostrarProductos");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  MostrarProductos fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP MostrarProductos.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysqli_error($conexion)."</b><br>");
    echo ("Descripcion de error: <b>". mysqli_error($conexion)."</b><br>");
}

/*
$consulta="CREATE PROCEDURE  SelectAlumnoPorId
  (
    IN par_idalumno INT
  )
  SELECT * FROM tblAlumno
  where idalumno = par_idalumno;";

$EjecutarConsulta = mysqli_query( $conexion, $consulta ) or die ( "No se pudo crear el procedimiento almacenado SelectPersonaPorID ");
*/

?>
</body>
</html>

