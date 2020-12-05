<?php

function DoesUserExists($clue){
    include '../db.php'; // include database connection
    $sql = "select count(*) as c from users where Username=? or UserEmail=?"; // declare query
    $stmt = mysqli_stmt_init($conn); // initialize statement with the database connection
    if(!mysqli_stmt_prepare($stmt, $sql)){ // prepare the statement given the initialized statement and the query
        return "internalerror";
    }
    else {
        // bind the parameters to the statement
        mysqli_stmt_bind_param($stmt, "ss", $clue, $clue);
        mysqli_stmt_execute($stmt); // execute the prepared statement

        $result = mysqli_stmt_get_result($stmt); // get the result
        mysqli_stmt_close($stmt); // close the statement
        if($data = mysqli_fetch_assoc($result)){
            //echo print_r($data) ;

            if($data['c'] == 1){
                return true;
            }
            else { return false; }
        }
        else {
            return false;
        }
    }

}


function GetUserId($clue){
    include '../db.php';
    $sql = "select UserId from users where Username=? or UserEmail=?";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt, "ss", $clue, $clue);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    $data = mysqli_fetch_assoc($result);
    mysqli_stmt_close($stmt);
    return $data['UserId'];
}



function ValidatePassword($id, $password){
    include '../db.php';
    $sql = "select * from users where UserId=?";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);

    $data = mysqli_fetch_assoc($result); // returns null if nothing was fetched

    if(password_verify($password, $data['UserPassword'])){
        return true;
    }
    else {
        return false;
    }

}