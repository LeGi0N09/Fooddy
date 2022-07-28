<?php
    include_once './conn.php';

    $format = "INSERT INTO `managment`(`foodid`, `fooditem`, `foodprice`, `quantity`, `total`, `tablenumber`, `status`) VALUES (%d,'%s',%d,%d,%d,%d,%d)";
    $sql = sprintf($format, $_POST['foodid'],$_POST['fooditem'],$_POST['foodprice'],1,$_POST['foodprice'],$_POST['tablenumber'],0);

    // $sql = "INSERT INTO `managment`(`foodid`, `fooditem`, `foodprice`, `quantity`, `total`, `tablenumber`, `status`) VALUES ([value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8])";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>