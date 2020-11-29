<html>
<head>
    <title>Crear BD</title>
</head>
<body >
<h2>Formulario para la Creacion de la Base de Datos</h2><br>
<?php
// Ejemplo de conexión a base de datos MySQL con PHP.
// Datos de la base de datos
$usuario = "root";
$password = "";
$servidor = "localhost";
$basededatos = "test";


// creación de la conexión a la base de datos con mysql_connect()
$conexion = mysqli_connect( $servidor, $usuario, $password) or die ("No se ha podido conectar al servidor de Base de datos");

// Selección de la base de datos a utilizar
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues no se ha podido conectar a la base de datos" );

//Realizando la consulta para crear una BD si es que no existe
$consulta="CREATE DATABASE IF NOT EXISTS Base29102020";
$EjecutarConsulta = mysqli_query( $conexion, $consulta ) or die ( "No se pudo crear la base de datos");

//Verificando si la BD se creo.
if ($EjecutarConsulta)
    echo ("La BD fue creada de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la BD.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}

$basededatos = "Base29102020";

$db = mysqli_select_db($conexion, $basededatos) or die("Upps! no se ha podido conectar a la nueva Base de Datos");

//Realizando la consulta para crear la tabla Alumno si es que no existe

$consulta="CREATE TABLE tblAlumno (idalumno INT PRIMARY KEY AUTO_INCREMENT, 
nombre varchar(20), direccion varchar(50), edad int)";
$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear la tabla tblAlumno");

//Verificando si la tabla se creo.
if ($EjecutarConsulta)
    echo ("La tabla tblAlumno fue creada de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la tblAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}

//Realizando la consulta para crear la tabla Alumno si es que no existe

$consulta="CREATE TABLE tblAlumnoXYZ (idalumno INT PRIMARY KEY AUTO_INCREMENT, 
nombre varchar(20), direccion varchar(50), edad int)";
$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear la tabla tblalumnos");

//Verificando si la tabla se creo.
if ($EjecutarConsulta)
    echo ("La tabla tblAlumnoXYZ  fue creada de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la tblAlumnoXYZ.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}



$consulta="CREATE PROCEDURE InsertAlumno
( 
    IN par_nombre VARCHAR(50),
    IN par_direccion VARCHAR(50),
    IN par_edad INT
)
 
insert into tblAlumno (nombre,direccion,edad)
values (par_nombre,par_direccion,par_edad)";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP InsertAlumno");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  InsertAlumno fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la tblAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}




$consulta="CREATE PROCEDURE UpdateAlumno
 ( 
    IN par_idalumno INT,
    IN par_nombre VARCHAR(50),
    IN par_direccion VARCHAR(50),
    IN par_edad INT
  )
 
update tblAlumno set nombre= par_nombre, direccion= par_direccion,edad= par_edad where idalumno = par_idalumno";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP UpdateAlumno");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  UpdateAlumno fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear la tblAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}



$consulta="CREATE PROCEDURE DeleteAlumno
 ( 
    IN par_idalumno INT
  )
  delete from  tblAlumno where idalumno  = par_idalumno";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP DeleteAlumno");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  DeleteAlumno fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP DeleteAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error ()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error ()."</b><br>");
}


$consulta="CREATE PROCEDURE SelectAlumno
  ( 
    
  )
  SELECT * FROM tblAlumno";

$EjecutarConsulta = mysqli_query($conexion, $consulta) or die ("No se pudo crear el SP SelectAlumno");

//Verificando si el SP se creo.
if ($EjecutarConsulta)
    echo ("El SP  SelectAlumno fue creado de Forma satisfactoria.<br>");
else
{
    echo ("Surgio problema para crear el SP SelectAlumno.<br>");
    echo ("El problema es: <br>");
    echo ("Codigo de error: <b>". mysql_error()."</b><br>");
    echo ("Descripcion de error: <b>". mysql_error()."</b><br>");
}
$consulta="CREATE PROCEDURE  SelectAlumnoPorId
  (
    IN par_idalumno INT
  )
  SELECT * FROM tblAlumno
  where idalumno = par_idalumno;";

$EjecutarConsulta = mysqli_query( $conexion, $consulta ) or die ( "No se pudo crear el procedimiento almacenado SelectPersonaPorID ");


?>
</body>
</html>


  
  
  