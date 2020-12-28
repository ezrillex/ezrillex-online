<?php
header("Location: /index.php");
?>
<html>
<head>
    <title>Ezrillex Online</title>
    <?php include '../components/stylesheets.html' ?>
</head>
<body>
<?php include "../components/navbar.php";?>
<br>
<div class="container">
    <div class="row">
        <div class="col">
            <?php $busqueda = $_GET["busqueda"]; ?>

            <h1>Resultados de la busqueda (x resultados)</h1>
            <h3>Buscando: <?php echo $busqueda; ?></h3>
            <ul>
                <li>
                    Resultado 1
                </li>
                <li>
                    Resultado 2
                </li>
            </ul>
        </div>
    </div>
</div>

<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script>

</script>
</body>
</html>

