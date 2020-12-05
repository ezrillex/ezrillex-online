<?php session_start();
if(!isset($_SESSION["UserId"])){
    header("Location: /pages/accounts/login.php?mensaje_alerta=usernotregistered");
}
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

    <div class="col">
        <br>
        <?php
            include '../components/series.functions.php';
            $idserie = $_GET["id"];
            if(!isset($idserie)){
                header("Location: /series/index.php");
            }
            $idserie = filter_var($idserie, FILTER_SANITIZE_NUMBER_INT);

            if(DoesSeriesExists($idserie) == false){
                header("Location: /series/index.php");
            }

            $metadata = GetSeriesData($idserie);

            echo '<div class="jumbotron">';
            echo '<h1 class="text-center">' . $metadata["SeriesName"] . '</h1>';
            echo '</div>';

            // get where you were from database otherwise first episode
            if(false){
                echo "not implemented";
            } else {
                $last_ep = 0;
                $last_timestamp = 0;
            }

            include './components/db.php';
            $q1 = 'select * from episodes where EpisodeSeries='.$metadata["SeriesId"].' and EpisodeOrder='.$last_ep;

            $result = mysqli_query($conn, $q1);
            $data = mysqli_fetch_array($result);


            $ep_sauce = "";
        ?>


        <div class="embed-responsive embed-responsive-16by9">
            <video class="embed-responsive-item" controls autoplay controlsList="nodownload">
                <source src="<?php echo $ep_sauce ?>" type="video/mp4" />
            </video>
        </div>




        <div class="d-flex justify-content-center align-items-center mt-3  row">
            <button type="button" class="btn btn-dark bg-black m-2">Anterior</button>
            <button type="button" class="btn btn-dark bg-black m-2">Siguiente</button>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3  row">

            <select class="custom-select w-auto">
                <option selected>This is a very long text indeed for a combo</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>


        </div>



<!--        <div class="card-columns">-->
<!--            --><?php
//            /*
//            include '../components/db.php';
//            $query = "select * from series";
//            $resultado = mysqli_query($conn, $query);
//            while($row=mysqli_fetch_array($resultado)){
//                echo    '<a class="card d-inline-block" href="/">'; // puede ser reproductor.php?idserie=2
//                echo    '<img class="card-img-top" src="posters/' . $row["SeriesPosterFileName"] . '" alt="Poster de ' . $row["SeriesName"] . '">';
//                echo    '<h5 class="card-title text-center pt-2">' . $row["SeriesName"] .'</h5></a>';
//            }
//            */
//            ?>
<!--        </div>-->
    </div>
</div>
<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script>
    activate("#navseries");
</script>
<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
</body>
</html>
