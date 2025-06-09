<?php

class DB {
    private $host = "localhost";
    private $db_name = "friendsapp";
    private $username = "root";
    private $password = "1122";

    public $conn;

    public function __construct() {
        $this->conn = $this->connect();
    }

    private function connect() {
        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
            
            // Check connection
            if ($this->conn->connect_error) {
                throw new Exception("Connection failed: " . $this->conn->connect_error);
            }
            
            return $this->conn;
        }
        catch(Exception $e) {
            echo "Connection Error: " . $e->getMessage();
            exit;
        }
    }
}