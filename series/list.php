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

<?php
include dirname(__DIR__) . '/components/series.functions.php';
$idserie = $_GET["id"];
if(!isset($idserie)){
    header("Location: /series/index.php");
}
$idserie = filter_var($idserie, FILTER_SANITIZE_NUMBER_INT);

if(DoesSeriesExists($idserie) == false){
    header("Location: /series/index.php");
}

$metadata = GetSeriesData($idserie);

include dirname(__DIR__) . '/components/db.php';
$q1 = 'select * from episodes where EpisodeSeries='.$metadata["SeriesId"].' order by episodeorder';

?>

<div class="container">
    <br>
    <div class="row">
        <div class="col-sm-4">
            <div>
<!--            <h1 class="text-center">--><?php //echo $metadata["SeriesName"]?><!--</h1>-->
                <img class="img-fluid" src="posters/<?php echo $metadata["SeriesPosterFileName"]?>" alt="Poster"/>
            </div>

        </div>
        <div class="col-sm-8">
            <div>
                <?php
                $result = mysqli_query($conn, $q1);
                while($data = mysqli_fetch_array($result)){
                    //echo"<option value=".$data[0].">".$data[1]."</option>";
                    echo '
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">'.$data[1].'</h5>
                            <a href="/series/ver.php?id='.$data[0].'" class="btn btn-outline-dark ">Ver Episodio</a>
                        </div>
                    </div>
                    ';
                }

                ?>
            </div>
        </div>
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

