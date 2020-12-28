<?php
header("Location: /index.php");

$alias = $_POST["alias"];
$comment = $_POST["comment"];

$alias = filter_var($alias, FILTER_SANITIZE_EMAIL);
$comment = filter_var($comment, FILTER_SANITIZE_EMAIL);


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "commentdb";

// create the connection?
$conn = new mysqli($servername, $username, $password ,$dbname);

// check connection
if($conn -> connect_error){
    die("connection failed". $conn->connect_error);    // ojo que no se mostrara el resto del archivo.
}


$sql = "insert into comments(alias, comm, posted) values('" . $alias . "','" . $comment . "',CURRENT_TIMESTAMP);";
//$result = $conn->query($sql); bruto lo estabas haciendo dos veces

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



$conn->close();
?>