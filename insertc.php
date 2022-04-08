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

    print_r($request);

    $pid= $request->id;
    $title = $request->title;
    $text = $request->text;
    

    $sql = "INSERT INTO comments (
        pid,
        uname ,
 	ctext,
        date
    ) VALUES 
    ('{$pid}',
    '{$title }',
    '{$text}',
    CURRENT_TIMESTAMP)
        ";

    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else
    {
        http_response_code(422);
    }
}


