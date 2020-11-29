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
         $servidor = 'localhost';
         $usuario = 'root';
         $password = '';
         $conexion = mysqli_connect($servidor, $usuario, $password);
         $consulta = "DROP DATABASE Base29102020";
		 
         if (mysqli_query($conexion, $consulta)) {
         	echo 
	         	'<script>
	        		swal({
	          			title: "Buena trabajo",
	          			text: "La base de datos ha sido eliminada correctamente!",
	          			type: "success"
	          			confirmButtonText: "Continuar"

	        		}).then(function() {
	          			window.location = "index.html";
	        		});
	        	</script>';
         } else {
            echo 
            	'<script>
			        swal({
			          	title: "ERROR!",
			          	text: "No hay ninguna base de datos, cree una.",
			          	type: "error"
			        }).then(function() {
			          	window.location = "index.html";
			        });
			    </script>';
         }
         mysqli_close($conexion);
      ?>
</body>
</html>