<?php
    include_once './conn.php';

    // update managment set quantity = quantity + 1 AND total = quantity * foodprice where id = 1

    $sql = "update managment set quantity = quantity - 1, total = quantity * foodprice where id = ".$_POST['id'];

    if ($conn->query($sql) === TRUE) {
        echo "Success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>