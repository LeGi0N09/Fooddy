<?php
    include_once 'conn.php';

    $sql = "update menu set name = '".$_POST['name']."',price = '".$_POST['price']."' where id = ".$_POST['id'];

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
