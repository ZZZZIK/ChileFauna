<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'conexion.php';

$sql = "SELECT * FROM categoria";
$result = $conn->query($sql);

$categorias = [];

while ($row = $result->fetch_assoc()) {
    $categorias[] = $row;
}

echo json_encode($categorias);
$conn->close();
?>
