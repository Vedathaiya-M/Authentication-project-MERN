import "./Main.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import kratos from "../../assets/kratos.jpg";
import sigma from "../../assets/sigma.jpg";

const Main = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/Login");
  };

  const handleSignIn = () => {
    navigate("/Signup");
  };
  return (
    <>
      <AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.8 }}
          className="wrapper main"
        >
          <img src={sigma} alt="" width={100} height={100} />
          <form className="form-box login">
            <button className="btn" onClick={handleLogIn}>
              Login
            </button>
            <button className="btn" onClick={handleSignIn}>
              Register
            </button>
          </form>
        </motion.div>
        
      </AnimatePresence>
    </>
  );
};

export default Main;
