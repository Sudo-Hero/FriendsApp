<?php
require_once(__DIR__ . '/../config/DB.php');

class UserController {
    private $conn;
    private $table = "users";

    public function __construct() {
        $db = new DB();
        $this->conn = $db->conn;
    }

    public function register($name, $email, $phone, $dob, $password) {
    $name = $this->conn->real_escape_string($name);
    $email = $this->conn->real_escape_string($email);
    $phone = $this->conn->real_escape_string($phone);
    $dob = $this->conn->real_escape_string($dob);
    $password = password_hash($this->conn->real_escape_string($password), PASSWORD_BCRYPT); // Secure hash

    // Generate token and expiry
    $token = bin2hex(random_bytes(16));
    $token_expiry = time() + (60 * 60 * 24 * 30); // 30 days from now

    $sql = "INSERT INTO users (name, email, phone, dob, password, token, token_expiry)
            VALUES ('$name', '$email', '$phone', '$dob', '$password', '$token', FROM_UNIXTIME($token_expiry))";

    if ($this->conn->query($sql)) {
        // Get the inserted user data
        $user_id = $this->conn->insert_id;
        $result = $this->conn->query("SELECT id, name, email, token FROM users WHERE id = $user_id");

        if ($result && $result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $user['status'] = "success";
            echo json_encode($user);
            exit;
        }
    }

    // Error response
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Registration failed."
    ]);
    exit;
}


    public function login($email, $password) {
        $sql = "SELECT * FROM {$this->table} WHERE email = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            // Verify password
            if (password_verify($password, $user['password'])) {
                $token = bin2hex(random_bytes(16));
                $expirationTime = time() + 60 * 60 * 24 * 60; // 60 days

                $updateSql = "UPDATE {$this->table} SET token = ?, token_expiry = ? WHERE email = ?";
                $updateStmt = $this->conn->prepare($updateSql);
                $updateStmt->bind_param("sis", $token, $expirationTime, $email);
                $updateStmt->execute();

                $user['token'] = $token;
                unset($user['password']); // Don't expose password
                $user['status'] = "success";

                echo json_encode($user);
                $updateStmt->close();
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid password"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "User not found"]);
        }

        $stmt->close();
        exit;
    }
}
