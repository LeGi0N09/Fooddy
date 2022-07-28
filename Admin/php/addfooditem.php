<?php
include_once 'conn.php';

$sql = "INSERT INTO `menu`(`name`, `price`) VALUES ('" . $_POST['name'] . "'," . $_POST['price'] . ")";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
