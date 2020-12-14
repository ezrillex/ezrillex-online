<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es-sv">
<head>
    <?php   include 'components/head.html';
    include 'components/stylesheets.html' ?>
</head>
<body>
    <?php include "components/navbar.php";?>



        <div class="container text-center">
            <br>
            <img src="/images/default_dance.gif" alt=""/>
            <h1>En construccion...</h1>
        </div>

    <?php include 'components/footer.php' ?>
    <?php include 'components/scripts.html' ?>

    <form action="">
        <button type="submit" class="btn btn-primary">
            Enviar Correo de Prueba
        </button>

    </form>


    <script>
        activate("#navinicio");
    </script>
</body>
</html>

