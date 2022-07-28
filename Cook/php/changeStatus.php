<?php
    include_once './conn.php';

    $sql = "update managment set status = 1 where id = ".$_POST['id'];

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
?>