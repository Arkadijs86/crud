<?php 
header('Access-Control-Allow-Origin: *');
require 'connect.php';

$id=$_GET['id'];

$sql = "SELECT * FROM `posts` WHERE `id` = '{$id}' LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
//print_r($row);

echo $json = json_encode($row);
//json_encode(['data'=>$json]);

exit;