<html lang="es-sv">
<head>
    <title>Ezrillex Online</title>
    <?php include '../components/stylesheets.html' ?>
</head>
<body>
<?php include "../components/navbar.php";?>

<div class="container">
    <br>
    <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">No disponible para usuarios no registrados.</h4>
        <p>Puedes iniciar el proceso del registro en <a href="/cuenta/MiCuenta.php">Mi Cuenta</a></p>
        <hr>
        <p class="mb-0">La solicitud de una cuenta sera aprobado de manera manual por lo que puede tardarse entre 1 a 7 dias en procesar.</p>
    </div>
    <br>
    <div class="jumbotron">
        <h1 class="text-center">Series</h1>
    </div>
</div>
<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script>
    activate("#navseries");
</script>
</body>
</html>

