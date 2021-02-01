<?php
//Controlador para generar el reporte de excel
include_once '../Clases/Bienes.php';
$ficheroExcel = "usuarios " . date("d-m-Y H_i_s") . ".csv";

header("Content-type: text/csv");
header("Content-Disposition: attachment; filename=" . $ficheroExcel);

$bienes = new Bienes();
$datos = $bienes->getBienesUserReporte($_POST['ciudad'], $_POST['tipo']);
echo "identificador;Direccion;Ciudad;Telefon;Codigo_Postal;Tipo;Precio\n";
foreach ($datos as $key) {
    echo $key['identificador']. ";";
    echo $key['direccion']. ";";
    echo $key['Ciudad']. ";";
    echo $key['telefono']. ";";
    echo $key['codigo_postal']. ";";
    echo $key['tipo']. ";";
    echo $key['Precio'] . "\n";

}

exit;
