<?php
    include_once "./conn.php";

    $sql = "SELECT * FROM menu";
    $result = $conn->query($sql);
    
    $data = array();

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          array_push($data,$row);
      }
      echo json_encode($data);
    } else {
      echo "[]";
    }

    $conn->close();
?>