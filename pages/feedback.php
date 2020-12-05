<html>
<head>
    <title>Ezrillex Online</title>
    <?php include '../components/stylesheets.html' ?>
</head>
<body>
<?php include "../components/navbar.php";?>
<br>
<div class="container">
    <form id="comment_form"  class="jumbotron">
        <h1>Comentarios</h1>
        <div class="form-group">
            <label for="alias">Alias:</label>
            <input required type="text" data-lpignore="true" minlength="1" maxlength="50" id="alias" name="alias" class="form-control"/>
        </div>

        <div class="form-group">
            <label for="comment">Comentario:</label>
            <textarea required minlength="1" maxlength="1000" name="comment" id="comment" class="form-control"  rows="4"></textarea>
        </div>
        <input onclick="PostComment();" class="btn btn-primary" type="submit">
    </form>

    <div class="container">
        <ul class="list-group">
            <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "commentdb";

                // create the connection?
                $conn = new mysqli($servername, $username, $password ,$dbname);

                // check connection
                if($conn -> connect_error){
                    echo "<h1>Error de servidor. No se pudo recuperar los comentarios.</h1>";
                    die("connection failed". $conn->connect_error);    // ojo que no se mostrara el resto del archivo.
                }


                $sql = "select alias, comm, posted from comments";
                $result = $conn->query($sql);


                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        SingleComment($row["alias"], $row["comm"], $row["posted"]);
                    }
                } else {
                    echo "<li><h3>No se encontraron comentarios</h3></li>";
                }

                $conn->close();
             ?>
            <!---->
        </ul>
    </div>
</div>


<?php include '../components/footer.php' ?>
<?php include '../components/scripts.html' ?>
<script src="post_comment_sender.js" type="application/javascript"></script>
<script>
    activate("navretro");
</script>
</body>
</html>

<?php
    function SingleComment($alias, $content, $date){
        echo '
        <li class="list-group-item">
            <b>'. $alias .' </b><span>('. $date .')</span><br>
            <span>'. $content .'</span>
        </li>
        ';
    }
?>

