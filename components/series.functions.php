<?php
function ExecutePreparedQueryBoolFromInt($query, $id): bool
{
    include 'db.php'; // include database connection
    $stmt = mysqli_stmt_init($conn); // initialize statement with the database connection
    if(!mysqli_stmt_prepare($stmt, $query)){ // prepare the statement given the initialized statement and the query
        die("Internal Error 500");
    }
    else {
        // bind the parameters to the statement
        mysqli_stmt_bind_param($stmt, "i", $id);
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


function DoesSeriesExists($id): bool
{
    return ExecutePreparedQueryBoolFromInt("select count(*) as c from series where SeriesId=?", $id);
}

function GetEpisodeData($ep_id): ?array
{
    include 'db.php';
    $sql = "select * from Episodes where EpisodeId=?";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt, "i", $ep_id);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);

    return mysqli_fetch_array($result); // returns null if nothing was fetched
}


function GetSeriesData($id): ?array
{
    include 'db.php';
    $sql = "select * from Series where SeriesId=?";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);

    return mysqli_fetch_array($result); // returns null if nothing was fetched
}

function DoesEpisodeExist($id): bool
{
    return ExecutePreparedQueryBoolFromInt("select count(*) as c from Episodes where EpisodeId=?", $id);
}




