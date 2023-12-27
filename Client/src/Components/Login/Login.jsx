import React, { useState } from "react";
import "./Login.css";
import { MdClose, MdEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiTwotoneEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(AiFillEye);

  const handleClose = async (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/");
  };

  const togglepassword = () => {
    setIcon((prevIcon) => (prevIcon === AiFillEye ? AiTwotoneEye : AiFillEye));
    setShowPassword(!showPassword);
  };

  const handleInputChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://authentication-project-mern.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/Home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1 }}
            className="wrapper"
          >
            <span className="icon-close">
              <MdClose onClick={handleClose} />
            </span>
            <div className="form-box login">
              <motion.h2
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Login
              </motion.h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="input-box">
                  <span className="icon">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={data.email}
                    required
                  />
                  <motion.label
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    Email
                  </motion.label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <AiFillEye
                      icon={icon}
                      style={{ cursor: "pointer" }}
                      onClick={togglepassword}
                    >
                      {showPassword ? "Hide" : "Show"} Password
                    </AiFillEye>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                    required
                  />
                  <motion.label
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    Password
                  </motion.label>
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" required />
                    Remember me
                  </label>
                  <Link to="/Mail">Fogot Passsword?</Link>
                </div>
                {error && <div className="inputs error-msg">{error}</div>}
                <button className="btn">Login</button>
                <div className="login-register">
                  <p>
                    Don't have an account?
                    <Link to="/Signup" className="register-link">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Login;
