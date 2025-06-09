<?php
// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit();
}

require_once '../src/controllers/UserController.php';

$controller = new UserController();

$action = $_GET['action'] ?? null;

// Actions that don't require authentication
$publicActions = ['login', 'register'];

if (!in_array($action, $publicActions)) {
    // For protected actions, get and validate token
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? '';

    if (!$token || !$controller->validateToken($token)) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'Unauthorized or token missing']);
        exit;
    }
}

switch ($action) {
    case "login":
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';
        $controller->login($email, $password);
        break;

    case "register":
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $dob = $_POST['dob'];
            $password = $_POST['password'];

            $controller->register($name, $email, $phone, $dob, $password);
        }
        break;

    case "getUsers":
        $users = $controller->getAllUsers();
        echo json_encode(['status' => 'success', 'users' => $users]);
        break;

    case "getUser":
        $id = $_GET['id'] ?? null;
        if (!$id) {
            echo json_encode(['status' => 'error', 'message' => 'User ID required']);
            exit;
        }
        $user = $controller->getUserById($id); // You implement this method in UserController
        if ($user) {
            echo json_encode(['status' => 'success', 'user' => $user]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
        }
        exit;
        
    case 'updateUser':
        $id = $_GET['id'] ?? null;
        $data = json_decode(file_get_contents("php://input"), true);

        if ($id && $data) {
            $UserController = new UserController();
            $UserController->updateUser($id, $data);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
        }
        break;


    case "deleteUser":
        $id = $_GET['id'] ?? null;

        if ($id) {
            $UserController = new UserController();
            $UserController->deleteUser($id);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'User ID not provided']);
        }
        break;


    default:
        http_response_code(404);
        echo json_encode(["status" => 404, "message" => "Action is not valid"]);
        exit;
}
