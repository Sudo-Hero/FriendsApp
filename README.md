# FriendsApp

FriendsApp is a simple full-stack user management application built using **React 19.1.0** for the frontend and **PHP (vanilla)** for the backend. It's designed for local development and testing with **XAMPP** on Windows.

---

## 🚀 How to Set Up the Project

### 🖥️ Backend Setup (PHP with XAMPP)

1. Download and install [XAMPP](https://www.apachefriends.org/index.html).
2. Copy the `backend/` folder into the `htdocs` directory (usually located at `C:\xampp\htdocs\`).
3. Start **Apache** (and optionally **MySQL**) using the XAMPP Control Panel.
4. Open a browser and visit:


If the setup is correct, you should receive a JSON response with a sample user or an error message if the user ID doesn’t exist.

---

### 🌐 Frontend Setup (React)

1. Navigate to the `frontend/` directory using your terminal.
2. Install dependencies:


3. Start the development server:


The React app will run on **[http://localhost:3000](http://localhost:3000)** by default.

---

## ⚙️ Configuration Notes

### 🔧 Changing the Port or Domain

- **By default**, the backend expects requests from `http://localhost:3000`.
- If you wish to change this (e.g., to use a different port or a custom domain), update the following files manually:

1. **Backend Configuration Files**:
  - `backend/src/config/DB.php`
  - `backend/public/index.php`

2. **Frontend**:
  - Update all hardcoded API URLs using `fetch()` or similar calls in the React source files.

> ⚠️ Note: There is **no proper `.env` file system** currently implemented for backend configuration.

---

## 🧪 Testing the Project

- Make sure the backend is served via XAMPP (`http://localhost/backend/public/...`)
- Make sure the frontend React app is running (`http://localhost:3000`)
- The frontend should be able to make authenticated API calls to the backend, like:


- Token based authentication is supported. Tokens must be passed in the `Authorization` header.

---

## 🗂 Project Structure

FriendsApp/
├── backend/
│   ├── public/
│   │   └── index.php
│   └── src/
│       ├── config/
│       │   └── DB.php
│       └── controllers/
│           └── UserController.php
├── frontend/
│   ├── public/
│   └── src/
│       └── components/
│           ├── UserDetail.js
│           ├── UserEdit.js
│           └── ...


---

## ✅ Features

- User registration and login (with token)
- View individual user profiles
- Edit user information
- Delete user accounts
- Protected API routes via token validation
- Responsive UI using Bootstrap

---

## 🛠 Built With

- **Frontend**: React 19.1.0
- **Backend**: PHP 8+ (vanilla PHP)
- **Test Environment**: XAMPP on Windows

---

## 📌 Additional Notes

- CORS is configured in `index.php` to allow frontend-backend interaction during development.
- All user interactions are handled through query strings like `action=getUser` in the backend.
- For production deployment, it is recommended to refactor the backend into a more structured MVC or RESTful API approach and add `.env` configuration support.

---

## 📞 Support

If you encounter any issues:
- Ensure Apache and MySQL are running in XAMPP
- Double-check `localhost/backend/public/index.php?action=...` is accessible
---
