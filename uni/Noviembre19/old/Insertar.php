<html>
	<head>
		<title>Insertar datos de tabla con MySQL</title>
	</head>
	<body >
		<h1>Insertando registros en la Base de Datos</h1>
		<?php

			include('include/config.inc');
			$conexion = mysqli_connect($servidor,$usuario,$contrasena,$basededatos);
			mysqli_set_charset($conexion,"utf8");
	
	        
			$nombre = $_POST["txtnombre"];
			$direccion = $_POST["txtdireccion"];
			$edad = $_POST["txtedad"];
	
			//creando la consulta para insertar el registro
			$consulta = "call InsertAlumno('$nombre', '$direccion', '$edad');";
			echo ($consulta);
			$EjecutarConsulta=mysqli_query( $conexion, $consulta ) or die ( "No se pudo insertar el registro");		

			if ($EjecutarConsulta)
			{
				echo ("El registro fue insertado de forma satisfactoria");
				
			}
			else
			{
				echo ("Surgio problema para insertar el registro.<br>");
				echo ("El problema es: .<br>");
				echo ("Codigo de error: .<b>".mysql_errno ()."</b><br>");
				echo ("Descripcion de error: <b>".mysql_error ()."</b><br>");
			}			

			//liberando recursos y cerrando la BD;
			mysqli_close($conexion);
		?>

		<br><br><a href="../index.html">Home</a>
		<br><br>
		
	</body>
</html>|

