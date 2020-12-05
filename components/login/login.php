<?php
session_start();
if(!isset($_POST["submit"])){
    header("Location: /pages/accounts/login.php");
}
else {

    include '../db.php';
    include 'login.functions.php';

    $user = $_POST["user"];
    $password = $_POST["pass"];
    $msj_alerta = false;
    if(!isset($_POST["user"])){
        $msj_alerta = "nouser";
    }
    if(!isset($_POST["pass"])){
        $msj_alerta = "nopass";
    }
    $exists = DoesUserExists($user);
    if($exists === true){
        $uid = GetUserId($user);
        //validate the password is valid for this user
        if(ValidatePassword($uid, $password)){
            // Password is valid and user exists
            $_SESSION['UserId'] = $uid;
            header("Location: /index.php"); // once the session is set, redirect to home page
            /*
            if(session_start()){
                //echo print_r($uid);

                //echo "session value:".$_SESSION['UserId'];
                //echo '<script>window.location.href="/"</script>';

                //echo isset($_SESSION["uid"]);
            }
            else {
                $msj_alerta = "internalerror";
            }*/
        }
        else
        {
            $msj_alerta = "wrongpass";
        }


    }
    else if($exists == "internalerror"){
        $msj_alerta = "internalerror";
    }
    else{
        $msj_alerta = "usernotfound";
    }

    if($msj_alerta != false){
        //echo '<script>window.location.href="' . $msj_alerta . '"</script>';
        header("Location: /pages/accounts/login.php?mensaje_alerta=".$msj_alerta); //header doesn't pass the sid info.
        /*
        echo '<html><head>Ezrillex Online</head><body>';
        echo '<form id="alertForm" action="../../pages/accounts/login.php" method="get"><input type="hidden" name="mensaje_alerta" value=' . $msj_alerta . '></form>';
        echo '<script type="text/javascript">
            document.getElementById("alertForm").submit();
          </script></body></html>  
         ';
        */
    }
    //exit();
}

