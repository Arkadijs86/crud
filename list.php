<?php
header('Access-Control-Allow-Origin: *');
require 'connect.php';
error_reporting(E_ERROR);
$posts = [];
$sql = "SELECT * FROM posts ORDER BY date DESC";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $posts[$cr]['id'] = $row['id'];
        $posts[$cr]['title'] = $row['title'];
        $posts[$cr]['text'] = $row['text'];
        $posts[$cr]['date'] = $row['date'];
        $cr++;
    }
//print_r($posts);

echo json_encode($posts);
}
else
{
    http_response_code(404);
}
?>