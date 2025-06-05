import React from "react";
import Navbar from './Navbar';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
import RegistrationPage from "./RegistrationPage";
import Login from "./Login";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/user/:id" element={<UserDetail />} />
          <Route exact path="/user/Edit/:id" element={<UserEdit />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegistrationPage />} />
        </Routes>
      </div >
      <Footer/>
    </Router >
  );
}

export default App;
