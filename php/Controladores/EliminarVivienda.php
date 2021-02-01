<?php
include_once '../Clases/Bienes.php';

$bienes = new Bienes();
$data = json_decode(file_get_contents('php://input'), true);
$bienes->eliminarVivienda($data['id']);
echo json_encode(array("response" => 'ok'));