import "./Signup.css";
import React from "react";
import { useState } from "react";
import { MdClose, MdEmail } from "react-icons/md";
import { AiFillEye, AiTwotoneEye, AiOutlineUser } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(AiFillEye);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleInputChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://authentication-project-mern.onrender.com/api/users";
      const { data: res } = await axios.post(url, data);
      alert("Registered Successfuly");
      navigate("/Login");
      console.log(res.message);
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

  const togglepassword = () => {
    setIcon((prevIcon) => (prevIcon === AiFillEye ? AiTwotoneEye : AiFillEye));
    setShowPassword(!showPassword);
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 0.8 }}
            class="wrapper signup"
          >
            <span className="icon-close">
              <MdClose onClick={handleClose} />
            </span>
            <div className="form-box register">
              <motion.h2
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Regitration
              </motion.h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="input-box">
                  <span className="icon">
                    <AiOutlineUser />
                  </span>
                  <input
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    value={data.username}
                    required
                  />
                  <motion.label
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    Username
                  </motion.label>
                </div>
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
                    initial={{ y: -50, opacity: 0 }}
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
                  <motion.label>
                    <input type="checkbox" required /> I agree to the terms &
                    conditions
                  </motion.label>
                </div>
                {error && <div className="inputs error-msg">{error}</div>}
                <button className="btn">Register</button>
                <div className="login-register">
                  <p>
                    Already have an account?
                    <Link to="/Login" className="login-link">
                      Login
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

export default Signup;
