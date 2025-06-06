<?php
include 'conexion.php';

$sql = "SELECT * FROM especie";
$result = $conn->query($sql);

$especies = [];

while ($row = $result->fetch_assoc()) {
    $especies[] = $row;
}

echo json_encode($especies);
$conn->close();
?>
