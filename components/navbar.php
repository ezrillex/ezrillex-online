<nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <img src="/images/favicon.png" width="25" height="25" alt=""/>
    <a class="navbar-brand" href="/index.php">ezrillex.online</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
                <a id="navinicio" class="nav-link" onclick="lc(0);" href="/index.php">Inicio</a>
            </li>
            <li class="nav-item">
                <a id="navseries" class="nav-link" onclick="lc(3);" href="/series/index.php">Series</a>
            </li>
            <li class="nav-item">
                <a id="navcontacto" class="nav-link" onclick="lc(2);" href="/legacy/info.php">Contacto</a>
            </li>
            <li class="nav-item">
                <a id="navchangelog" class="nav-link" onclick="lc(1);" href="/legacy/changelog.php">Changelog</a>
            </li>
            <li class="nav-item">
                <a id="navretro" class="nav-link" onclick="lc(4);" href="/pages/feedback.php">Comentarios</a>
            </li>
            <li class="nav-item">
                <a id="navcuenta" class="nav-link" onclick="lc(5);" href="/cuenta/MiCuenta.php">Mi Cuenta</a>
            </li>

            <!--            <li class="nav-item">-->
<!--                <a class="nav-link disabled" href="#">Disabled</a>-->
<!--            </li>-->
        </ul>
        <form action="/pages/busqueda.php" method="get" class="form-inline my-2 my-lg-0">
            <input name="busqueda" class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-dark  my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    </div>
</nav>