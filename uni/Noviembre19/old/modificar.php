<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Modificando datos</title>
</head>
<body>

<?php

     //capturar el codigo a modificar

     $idalumno = $_REQUEST['idalumno'];
 
//cargar la conexion y octener la conexion activa $mysql

     include('include/config.inc');

     $conexion = mysqli_connect($servidor,$usuario,$contrasena,$basededatos);

     mysqli_set_charset($conexion,"utf8");


     $query="call SelectAlumnoPorId('$idalumno');";

     $consulta=$conexion->query($query);

     $row=$consulta->fetch_assoc(); 


     mysqli_close($conexion);    

 ?>


     <h2>Informacion del registro seleccionada</h2>

     <form method = "post" name="frmvalor" action="almacenarmodificar.php">
 
        idalumno :<input type="text" name="txtidalumno2" value="<?php echo $row['idalumno'];?>"><br><br> 

                    <input type="text" name="txtidalumno" style="visibility:hidden" value="<?php echo $row['idalumno'];?>"><br><br>

         nombre :  <input type="text" name="txtnombre" value="<?php echo $row['nombre'];?>"><br><br>

         direccion :  <input type="text" name="txtdireccion" value="<?php echo $row['direccion'];?>"><br><br>

         edad:<input type="text" name="txtedad" value="<?php echo $row['edad'];?>"><br><br>    

 <br>

 <input type="submit" name="btnModificar" value="Modificar">
</body>
</html>