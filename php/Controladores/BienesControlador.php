<?php

include_once '../Clases/Bienes.php';

$bienes =  new Bienes();

echo json_encode($bienes->getBienesUser());