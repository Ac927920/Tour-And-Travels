<?php
$servername = "localhost";
$username = "root";
$password = "";
// create connection 
$conn = mysqli_connect("localhost", "root", "", "login");
$sql = "SELECT * FROM login WHERE ID='1'";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
echo $row;

?>