<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es-SV">
<head>
    <?php   include '../../components/head.html';
            include '../../components/stylesheets.html' ?>
</head>
<body>
<?php include_once "../../components/navbar.php";?>

<br>
<div class="container">
    <?php if(isset($_GET["mensaje_alerta"])){
        switch (filter_var($_GET["mensaje_alerta"], FILTER_SANITIZE_NUMBER_INT)){
            case "nouser":
                echo '<div class="alert alert-warning" role="alert">
                     <h4 class="alert-heading">No se ingreso un nombre de usuario o correo</h4></div>';
                break;
            case "nopass":
                echo '<div class="alert alert-warning" role="alert">
                    <h4 class="alert-heading">No se ingreso una contraseña.</h4></div>';
                break;
            case "usernotfound":
                echo '<div class="alert alert-danger" role="alert">
                      <h4 class="alert-heading">No se encontró el usuario o correo.</h4></div>';
                break;
            case "wrongpass":
                echo '<div class="alert alert-danger" role="alert">
                      <h4 class="alert-heading">La contraseña ingresada es incorrecta.</h4></div>';
                break;
            case "internalerror":
                echo '<div class="alert alert-danger" role="alert">
                      <h4 class="alert-heading">Error interno del servidor.</h4></div>';
                break;
            case "usernotregistered":
                echo    '<div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">La pagina solicitada no esta disponible para usuarios no registrados.</h4>
                        </div>';
                break;
        }
    }

    ?>

    <div class="jumbotron text-center">
        <h1>Iniciar Sesión</h1>
        <form class="text-center" method="post" action="../../components/login/login.php">
            <label for="user">Usuario / Correo:</label><br>
            <input name="user" id="user" type="text" maxlength="50"><br><br>
            <label for="pwd">Contraseña:</label><br>
            <input name="pass" id="pwd" type="password"><br><br>
            <input name="submit" type="submit" value="Ingresar">
        </form>
        <br/>
        <a href="">Crear una cuenta</a><br>
    </div>
</div>

<?php include_once '../../components/footer.php' ?>
<?php include_once '../../components/scripts.html' ?>
<script>
    activate("#navIngresar");
</script>
</body>
</html>

