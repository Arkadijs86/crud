<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

require 'connect.php';

$postdata = file_get_contents("php://input");


if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);


    $id = $request->id;
    $title = $request->title;
    $text = $request->text;
    $date = $request->date;

    $sql = "UPDATE posts SET title = '{$title}', text = '{$text}', date = CURRENT_TIMESTAMP WHERE id='{$id}'";



   

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return  http_response_code(422);
    }
}


