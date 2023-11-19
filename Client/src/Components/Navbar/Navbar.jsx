import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
     navigate("/Login")
  };
  return (
    <header>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 20 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="logo"
      >
        🕴
      </motion.h2>
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: -20 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="navigation"
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">contact</a>
        <button className="btnLogin-popup" onClick={handleSubmit}>
          Login
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;
