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
			$conexion = mysqli_connect($servidor,$usuario,$contrasena,$basededatos);
			mysqli_set_charset($conexion,"utf8");
			

			$query=" call SelectAlumno();";

			$resultado=mysqli_query( $conexion, $query ) or die ( "No se pueden mostrar los registros");
					
			echo"<table width='100%' border='1' align='center'>";
			echo "<tr>";
			echo "<th>Id Alumno</th><th>Nombre</th> <th>Direccion</th> <th>Edad</th>";
			echo "</tr>";

			while ($row=mysqli_fetch_array($resultado))
				{
				echo "<tr>";
				echo "<td>",$row['idalumno'],"</td>";				
				echo "<td>",$row['nombre'],"</td>";
				echo "<td>",$row['direccion'],"</td>";
				echo "<td>",$row['edad'],"</td>";

				 echo "<td>"."<a href='eliminar.php?idalumno=".$row['idalumno']."'>Eliminar</a>"."</td>";

                 echo "<td>"."<a href='modificar.php?idalumno=".$row['idalumno']."'>Modificar</a>"."</td>";
				
				
								
				echo "</tr>";
				}
			echo "</table>";
			
			// cerrar conexión de base de datos
			mysqli_close( $conexion );
		 
		 ?>
		<br><br><br>
		<CENTER>
		<a href="../index.html">inicio</a><br>
</body>
</html>