<?php
    $numPlatos =(int) $_POST['num_platos'];
    $tipoComida = $_POST['TipoComida'];
    $postre = isset( $_POST['postre']) ? $_POST['postre'] : 'Sin Postre';
    $numPostres = (int) $_POST['num_postres'];

    $precio = 0;
    switch($tipoComida){
        case 'desayuno':
            $precio = 2.00;
        break;
        case 'almuerzo':
            $precio = 3.25;
        break;
        case 'cena':
            $precio = 2.50;
        break;
    }

    $precioPostre = 0;
    switch($postre){
        case 'sorbete':
            $precioPostre = 1.5;
        break;
        case 'gelatina':
            $precioPostre = 0.8;
        break;
        case 'flan':
            $precioPostre = 1.2;
        break;
        case 'pastel':
            $precioPostre = 2;
        break;
    }

    echo '<h1>Subtotal de ' . $numPlatos . ' ' . $tipoComida . 's.</h1>';
    echo '<h1>$' . ($numPlatos * $precio) . '</h1>';


    echo 
    "
    <br>
    <h1>Subtotal de " . $numPostres . " " . $postre . ".</h1>
    <h1>$" . ($precioPostre * $numPostres) . "</h1>   
    ";

    echo "Total: $" . (($precio * $numPlatos) + ($precioPostre * $numPostres));
?>