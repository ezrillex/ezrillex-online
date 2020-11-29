<html>
	<head>
		<title>Ejemplo de recibir datos con PHP (GET)
		</title>
	</head>
	<body>
		Recibiendo los datos <br>
		<?php
		  $nombre=$_GET['txtNombre'];
		  $edad=$_GET['txtEdad'];
		  echo "Hola" .$nombre. "tu tienes" .$edad. "a�os" ;
		?>
	</body>
</html>