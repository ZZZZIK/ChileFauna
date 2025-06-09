<?php
include 'conexion.php';

$sql = "SELECT * FROM noticia";
$result = $conn->query($sql);

$noticias = [];

while ($row = $result->fetch_assoc()) {
    $noticias[] = $row;
}

echo json_encode($noticias);
$conn->close();
?>
