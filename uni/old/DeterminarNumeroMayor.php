<?php
	$num1=(int)$_POST['num1'];
	$num2=(int)$_POST['num2'];
	
	if($num1 > $num2){
		echo '<h1>El primer numero es mayor</h1>';
	}
	else if($num1 == $num2){
		echo '<h1>Los dos numeros son iguales</h1>';
	}
	else if($num1 < $num2){
		echo '<h1>El segundo numero es mayor';
	}
?>