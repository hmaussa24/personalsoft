<?php
include_once '../Clases/Bienes.php';

$bienes = new Bienes();
$data = json_decode(file_get_contents('php://input'), true);
$bienes->setBienes($data['Id'], $data['Direccion'], $data['Ciudad'], $data['Telefono'], $data['Codigo_Postal'], $data['Tipo'], $data['Precio']);
echo json_encode(array("response" => 'ok'));