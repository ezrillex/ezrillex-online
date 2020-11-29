<?php
    $numero=(int)$_POST['num'];
    
    $inf=(int)$_POST['limite_inferior'];
    $sup=(int)$_POST['limite_superior'];

    
    for($i = $inf; $i <= $sup; $i++){
        echo "<h1>" . $numero . ' * ' . $i . "=" . ($i*$numero) . "</h1>";
    }
?>