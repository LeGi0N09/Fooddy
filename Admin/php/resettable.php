<?php
    include_once 'conn.php';

    $sql = "DELETE FROM `managment` WHERE tablenumber = '".$_POST['tablenumber']."'";

    if ($conn->query($sql) === TRUE) {
        echo "Success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
