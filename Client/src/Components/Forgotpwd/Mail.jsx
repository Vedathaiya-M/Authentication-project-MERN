import React from "react";
import "./Forgotpwd.css";
import { useState } from "react";
import { MdClose, MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Mail = () => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/Login")
  };

  const handleInputChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "https://authentication-project-mern.onrender.com/api/auth";
      // const { data: res } = await axios.post(url, data);
      // localStorage.setItem("token", res.data);
      navigate("/Errorpage");
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

export default Mail;
