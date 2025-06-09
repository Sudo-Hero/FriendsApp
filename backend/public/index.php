<?php
// CORS headers (add this before anything else)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204); // No Content
    exit();
}

// Include your controller
require_once '../src/controllers/UserController.php';

// Get action
$action = $_GET['action'] ?? null;

switch ($action) {
    case "login":
        // Expecting JSON input
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';

        $UserController = new UserController();
        $UserController->login($email, $password);
        break;

    case "register":
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $dob = $_POST['dob'];
            $password = $_POST['password'];

            $UserController = new UserController();
            $UserController->register($name, $email, $phone, $dob, $password);
        }
        break;

    case "getUser":
        // Implement getUser logic here
        break;

    case "updateUser":
        // Implement update logic here
        break;

    case "deleteUser":
        // Implement delete logic here
        break;

    default:
        http_response_code(404);
        echo json_encode(["status" => 404, "message" => "Action is not valid"]);
        exit;
}
