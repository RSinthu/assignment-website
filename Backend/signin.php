<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ecommerce";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password=$_POST['password'];
    $sql = "INSERT INTO signin (email,password) VALUES ('$email','$password')";
    if (!$conn->query($sql) === TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Access denied.";
}

$conn->close();
header("Location: ../index.html");
exit();
?>
