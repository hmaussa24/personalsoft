<?php
//Clase que administra la tabla bienes de la base de datos
require_once 'DbConexion.php';

class Bienes
{

    private $conexion;
    public function __construct()
    {
        $this->conexion = new DbConexion('localhost', 'root', '', 'intelcost_bienes');
        $this->conexion->connect();
    }
 ///funcion que obtiene todos los bienes en la base de datos del usuario
    public function getBienesUser()
    {
        $datos = $this->conexion->getDatos('SELECT * FROM BIENES');
        return $datos;
    }


    /// consulta para generar el reporte en excel
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
 

    //funcion que guarda los datos de los bienes en la base de datos
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

    
 //funcion que elimina una vivienda de la base de datos
    function eliminarVivienda($id){
        $datos = $this->conexion->eliminar("DELETE FROM BIENES WHERE id='$id'");
        return $datos;
    }

}
