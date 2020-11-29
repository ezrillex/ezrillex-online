<?php
$f1n1 = $_POST["fn1"];
$f1n2 = $_POST["fn2"];
$f2n1 = $_POST["fn3"];
$f2n2 = $_POST["fn4"];
$limitera = $_POST["limi"];

$den1 = $f1n2;
$den2 = $f2n2;

$f1n1 *= $den2;
$f1n2 *= $den2;

$f2n1 *= $den1;
$f2n2 *= $den1;

$c01 = 0;
$c1 = 0;

for($i = 0; $i < $limitera; $i++){
    $f1n1 += $f2n1;
    echo $f1n1 . " / " . $f1n2 . "<br>";
    if($f1n1 / $f1n2 >= 0 & $f1n1 / $f1n2 <= 1){
        $c01++;
    }
    elseif($f1n1 / $f1n2 > 1){
        $c1++;
    }
}
echo "valores entre 0 y 1 " . $c01 . "<br>";
echo "valores mayores que 1 " . $c1;
