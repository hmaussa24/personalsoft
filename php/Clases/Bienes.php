<?php
require_once 'DbConexion.php';

class Bienes
{

    private $conexion;
    public function __construct()
    {
        $this->conexion = new DbConexion('localhost', 'root', '', 'intelcost_bienes');
        $this->conexion->connect();
    }

    public function getBienesUser()
    {
        $datos = $this->conexion->getDatos('SELECT * FROM BIENES');
        return $datos;
    }

    public function getBienesUserReporte($ciudad, $tipo)
    {
        if($ciudad && $tipo){
            $datos = $this->conexion->getDatos("SELECT * FROM BIENES WHERE Ciudad='$ciudad' AND tipo= '$tipo'");
        }else{
            if($ciudad){
                $datos = $this->conexion->getDatos("SELECT * FROM BIENES WHERE Ciudad='$ciudad'");
            }else{
                $datos = $this->conexion->getDatos("SELECT * FROM BIENES WHERE tipo= '$tipo'");
            }
        }
        
        return $datos;
    }

    public function setBienes($id = "", $direccion = "", $ciudad = "", $telefono = "", $codigo_postal = "", $tipo = "", $precio = "")
    {
        $datos = $this->conexion->getDatos('SELECT * FROM BIENES');
        $bandera = true;
        foreach ($datos as $key) {
            if ($key['identificador'] == $id) {
                $bandera = false;
            }
        }
        if ($bandera) {
            $this->conexion->InserData("INSERT INTO BIENES (identificador, direccion, ciudad, telefono, codigo_postal, tipo, precio)
            VALUES ('$id','$direccion','$ciudad','$telefono','$codigo_postal','$tipo','$precio')");
        }

    }

    function eliminarVivienda($id){
        $datos = $this->conexion->eliminar("DELETE FROM BIENES WHERE id='$id'");
        return $datos;
    }

}
