<?php
/// controlador para obtener todos los bienes guardados en la base de datos
include_once '../Clases/Bienes.php';

$bienes =  new Bienes();

echo json_encode($bienes->getBienesUser());