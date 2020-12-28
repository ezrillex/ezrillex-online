<?php session_start();
//    if(!isset($_SESSION["UserId"])){
//        header("Location: /pages/accounts/login.php?mensaje_alerta=usernotregistered");
//    }
?>
<!DOCTYPE html>
<html lang="es-sv">
<head>
    <?php   include '../components/head.html';
    include '../components/stylesheets.html' ?>
</head>
<body>
<?php include "../components/navbar.php";?>

<div class="container">

    <div>
        <br>
        <h1 class="text-center display-1">Series</h1>
        <br>
        <div class="card-columns">
            <?php
            include '../components/db.php';
            $query = "select * from series";
            $resultado = mysqli_query($conn, $query);
            while($row=mysqli_fetch_array($resultado)){
                echo    '<a class="card d-inline-block" href=list.php?id=' . $row["SeriesId"] . ';>';
                echo    '<img class="card-img-top" src="posters/' . $row["SeriesPosterFileName"] . '" alt="Poster de ' . $row["SeriesName"] . '">';
                echo    '<h5 class="card-title text-center pt-2">' . $row["SeriesName"] .'</h5></a>';
            }
            ?>
        </div>
    </div>
</div>
<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script>
    activate("#navseries");
</script>
</body>
</html>

