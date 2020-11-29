<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Almacenando y modificando</title>
</head>
<body>
<?php
	include('include/config.inc');
	
	$misql = mysqli_connect($servidor,$usuario,$contrasena,$basededatos);
	mysqli_set_charset($misql,"utf8");
	
	        $idalumno = $_POST["txtidalumno"];
			$nombre = $_POST["txtnombre"];
			$direccion = $_POST["txtdireccion"];
			$edad = $_POST["txtedad"];
    
	

	$query = "call UpdateAlumno ('$idalumno', '$nombre', '$direccion', '$edad');";

	echo $query;
	$consulta=$misql->query($query);

	if($consulta){
		echo "registro actualizado";
		header("Location:mostra.php");
	}
	else{
		echo "ERROR: nose puede editar por alguna razon.";
	}
  ?>
</body>
</html>