<!--INICIO CODIGO HTML Y PHP-->
<?php
    $f11 = $_POST["f11"];
    $f12 = $_POST["f12"];
    $f21 = $_POST["f21"];
    $f22 = $_POST["f22"];
    $f31 = $_POST["f31"];
    $f32 = $_POST["f32"];

    function aMixta($a1, $a2){
        $top = "";
        if($a1 / $a2 > 1){
            $top = intval( $a1 / $a2);
            $a1 = $a1 - $top * $a2;
        }
        echo $top . "  " . $a1 . "/" . $a2;
    }

/*
     * convertir a Mixta dado numerador, denominador
            si el numerador dividido entre el denominador es mayor a uno {
                numero entero = numerador dividido entre denominador sin decimales
                numerador = numerador - numero entero * denominador
            }
        mostrar numero entero y espacio y  numerador y "simbolo fraccion" y denominador

    }
     *
     * */
?>

<html>
<head>
    <title>
        Parcial 3 Ezra Alejandro Abarca Cordova 17-4523-2018
    </title>
</head>
<body>
<style>
    table, th, td {
        border: 1px solid black; /* sin no se ven los bordes y dificulta la comprension de las tablas */
    }
</style>
<h1>
    Ezra Alejandro Abarca Cordova 17-4523-2018
</h1>
<h2>Resultados:</h2>
<table>
    <tr>
        <td>
            Fraccion 1
        </td>
        <td>
            <?php echo $f11 . "/" . $f12 ?>
        </td>
        <td>
            <?php
                if ($f11 / $f12 > 1){
                    echo "Impropia";
                }
                else {
                    echo "Propia";
                }
            ?>
        </td>
    </tr>
    <tr>
        <td>
            Fraccion 2
        </td>
        <td>
            <?php echo $f21 . "/" . $f22 ?>
        </td>
        <td>
            <?php
            if ($f21 / $f22 > 1){
                echo "Impropia";
            }
            else {
                echo "Propia";
            }
            ?>
        </td>
    </tr>
    <tr>
        <td>
            Fraccion 3
        </td>
        <td>
            <?php echo $f31 . "/" . $f32 ?>
        </td>
        <td>
            <?php
            if ($f31 / $f32 > 1){
                echo "Impropia";
            }
            else {
                echo "Propia";
            }
            ?>
        </td>
    </tr>
    <tr>
        <td>
            Suma de las fracciones:
        </td>
        <td>
            <?php
                function sumar($a1, $a2, $b1, $b2){
                    $d1 = $a2;
                    $d2 = $b2;
                    $d1 *= $b2;
                    $d2 *= $a2;
                    $a1 *= $b2;
                    $b1 *= $a2;
                    $suma1 = $a1 + $b1;
                    return array($suma1, $d1);
                }
                $s1 = sumar($f11, $f12, $f21, $f22);
                $s2 = sumar($s1[0], $s1[1], $f31, $f32);

                echo $s2[0] . "/" . $s2[1];
            ?>
        </td>
        <td>
            Mixta: <?php aMixta($s2[0], $s2[1]) ?>
        </td>
    </tr>
    <tr>
        <td>
            Multiplicacion de las fracciones:
        </td>
        <td>
            <?php
                $arriba = $f11 * $f21 * $f31;
                $abajo = $f12 * $f22 * $f32;

                echo $arriba . "/" . $abajo;
            ?>
        </td>
        <td>
            Mixta: <?php aMixta($arriba, $abajo) ?>
        </td>
    </tr>
</table>
</body>
</html>
<!--FIN CODIGO HTML Y PHP-->