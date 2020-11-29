<?php
    $numerador1 = $_POST["Nombre de la variable a recuperar sin espacios"];
    $denominador1 = $_POST[""];
    $numerador2 = $_POST[""];
    $denominador2 = $_POST[""];
    $numerador3 = $_POST[""];
    $denominador3 = $_POST[""];
?>

<html>
<head>
</head>
<body>
<h1>Nombre Carnet</h1>
<h1>Calculos:</h1>
<table style="border: 1px solid black;">
    <tr><td>1</td><td>mostrar fraccion numero 1</td>
        <td><?php determinar si la fraccion es impropia o propia y mostrar con echo ?></td>
    </tr>
    <tr><td>2</td>
        <td>mostrar segunda fraccion</td>
        <td><?php determinar si la fraccion es impropia o propia y mostrar con echo ?>
        </td>
    </tr><tr><td>3</td><td>mostrar fraccion tres</td>
        <td><?php determinar si la fraccion es impropia o propia y mostrar con echo ?>
        </td>
    </tr>
    <tr><td>Suma -></td><td><?php determinar la suma y mostrar con echo ojo que pide el resultado ya  como fraccion mixta ?>
        </td>
    </tr>
    <tr><td>Multiplicacion</td>
        <td><?phpdeterminar la multiplicacion y mostrar con echo ojo que pide como fraccion mixta el resultado ?>
        </td>
    </tr>
</table>
</body>
</html>
