<?php
    include_once './conn.php';

    $sql = "DELETE FROM `managment` where id = ".$_POST['id'];

    if ($conn->query($sql) === TRUE) {
        echo "Success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>