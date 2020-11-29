<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Eliminar registro</title>
</head>
<body>
	
	<?php
	include('include/config.inc');
	$conexion = mysqli_connect($servidor,$usuario,$contrasena,$basededatos);
	mysqli_set_charset($conexion,"utf8");		

	$idalumno=$_REQUEST['idalumno'];
		
	$consulta="call DeleteAlumno ('$idalumno');";
	echo($consulta);
	
	$resultado=mysqli_query( $conexion, $consulta ) or die ( "No se puede eliminar el registro");
	if($resultado)
	{
	  echo ("El registo fue eliminado de forma satisfactoria.<br>");
	  header("Location:Mostra.php");
	}
	else
	{
	  echo ("Surgio un problema al momento de eliminar el registro.<br>");
	  echo ("El problema es:.<br>");
	  echo ("Codigo del error.<br>".mysql_errno()."</br><br>");
	  echo ("Descripcion del error.<br>".mysql_error()."</br><br>");	
	}
	// cerrar conexión de base de datos
	mysqli_close( $conexion );
?>
</body>
</html>