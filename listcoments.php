<?php
header('Access-Control-Allow-Origin: *');
require 'connect.php';
error_reporting(E_ERROR);
$posts = [];
$sql = "SELECT * FROM comments ORDER BY date DESC";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $posts[$cr]['id'] = $row['pid'];
        $posts[$cr]['title'] = $row['uname'];
        $posts[$cr]['text'] = $row['ctext'];
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