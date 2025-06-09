<?php

require_once('/../config/DB.php');
class User{
    private $conn;
    private $table = "users";

    public $id;
    public $username;
    public $email;
    public $password;

    public function __construct($db) {
        $this->conn = new DB();
    }

    
}