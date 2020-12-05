<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es-sv">
<head>
    <?php   include '../../components/head.html';
    include '../../components/stylesheets.html' ?>
</head>
<body>
<?php include_once "../../components/navbar.php";?>

<div>
    <div class="jumbotron">
        <h1>Mi Cuenta</h1>
    </div>
</div>
<?php include_once '../../components/footer.php' ?>
<?php include_once '../../components/scripts.html' ?>
<script>
    activate("#navcuenta");
</script>
</body>
</html>
