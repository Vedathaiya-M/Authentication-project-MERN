import { useState } from "react";
import React from "react";
import "./Forgotpwd.css";
import { MdClose, MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiTwotoneEye } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
const Resetpwd = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(AiFillEye);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/OTP");
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
      // const url = "https://authentication-project-mern-server.onrender.com/api/auth";
      // const { data: res } = await axios.post(url, data);
      // localStorage.setItem("token", res.data);
      navigate("/Login");
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
            transition={{ duration: 0.8 }}
            class="wrapper forgot"
          >
            <span className="icon-close">
              <MdClose onClick={handleClose} />
            </span>
            <div className="form-box forgotpwd">
              <motion.h2
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Reset Password
              </motion.h2>
              <form action="" onSubmit={handleSubmit}>
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
                    New Password
                  </motion.label>
                </div>
                {error && <div className="inputs error-msg">{error}</div>}
                <button className="btn">Click</button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Resetpwd;
