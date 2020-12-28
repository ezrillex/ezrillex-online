<?php session_start();
//if(!isset($_SESSION["UserId"])){
//    header("Location: /pages/accounts/login.php?mensaje_alerta=usernotregistered");
//}
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
        <?php
            include '../components/series.functions.php';
            $idepisodio = $_GET["id"];
            if(!isset($idepisodio)){
                header("Location: /series/index.php");
            }
            $idepisodio = filter_var($idepisodio, FILTER_SANITIZE_NUMBER_INT);

            if(DoesEpisodeExist($idepisodio) == false){
                header("Location: /series/index.php");
            }

            $episodeData = GetEpisodeData($idepisodio);
            $metadata = GetSeriesData($episodeData[4]);

            echo '<div class="jumbotron">';
            echo '<h1 class="text-center">' . $metadata["SeriesName"] . '</h1>';
            echo '</div>';


            include dirname(__DIR__) . '/components/db.php';
            $q1 = 'select * from episodes where EpisodeId='.$episodeData[0];

            $ep_sauce = $episodeData[2];
        ?>

        <div class="embed-responsive embed-responsive-16by9">
            <video class="embed-responsive-item" controlsList="nodownload" controls autoplay >
                <source src="/series/sauce/<?php echo $ep_sauce ?>.mp4" type="video/mp4" />
            </video>
        </div>

        <br>
        <div class="text-center">
            <a class="btn btn-outline-dark " href="list.php?id=<?php echo $metadata[0] ?>;">Regresar a Lista</a>
        </div>



<!--        <div class="d-flex justify-content-center align-items-center mt-3  row">-->
<!--            <button type="button" class="btn btn-dark bg-black m-2">Anterior</button>-->
<!--            <button type="button" class="btn btn-dark bg-black m-2">Siguiente</button>-->
<!--        </div>-->
<!--        <div class="d-flex justify-content-center align-items-center mt-3  row">-->
<!--            <select class="custom-select w-auto">-->
<!--                --><?php
//                    $result = mysqli_query($conn, $q1);
//                    while($data = mysqli_fetch_array($result)){
//                        echo"<option value=".$data[0].">".$data[1]."</option>";
//                    }
//                ?>
<!--            </select>-->
<!---->
<!--        </div>-->

    </div>
</div>
<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script>
    activate("#navseries");
</script>
</body>
</html>
