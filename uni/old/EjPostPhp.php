<html>
	<head>
		<title>Ejemplo de recibir datos con PHP (GET)
		</title>
	</head>
	<body>
		Recibiendo los datos <br>
		<?php
		  $nombre=$_POST['txtNombre'];
		  $edad=$_POST['txtEdad'];
		  echo "Hola" .$nombre. "tu tienes" .$edad. "años" ;
		?>
	</body>
</html>