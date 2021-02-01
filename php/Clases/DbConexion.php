<?php

class DbConexion
{

    private $host;
    private $usuario;
    private $pass;
    private $db;

    private $connection;

    public function __construct($host, $usuario, $pass, $db)
    {
        $this->host = $host;
        $this->usuario = $usuario;
        $this->pass = $pass;
        $this->db = $db;
    }

    public function connect()
    {

        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            PDO::MYSQL_ATTR_FOUND_ROWS => true,
        );

        $this->connection = new PDO(
            'mysql:host=' . $this->host . ';dbname=' . $this->db,
            $this->usuario,
            $this->pass,
            $opciones
        );
    }

    public function getDatos($sql)
    {

        $data = array();
        $result = $this->connection->query($sql);

        $error = $this->connection->errorInfo();
        if ($error[0] === "00000") {
            $result->execute();
            if ($result->rowCount() > 0) {
                while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                    array_push($data, $row);
                }
            }
        } else {
            throw new Exception($error[2]);
        }
        return $data;
    }



    public function InserData($sql)
    {

        $result = $this->connection->query($sql);
        $error = $this->connection->errorInfo();

        if ($error[0] === "00000") {
            return $result->rowCount() > 0;
        } else {
            throw new Exception($error[2]);
        }
    }

    public function eliminar($sql)
    {

        $result = $this->connection->query($sql);
        $error = $this->connection->errorInfo();

        if ($error[0] === "00000") {
            $result->execute();
            print_r($result);
            return $result->rowCount() > 0;
        } else {
            throw new Exception($error[2]);
        }
    }

    public function close()
    {
        $this->connection = null;
    }
}
