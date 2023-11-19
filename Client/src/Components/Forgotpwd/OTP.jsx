import React, { useState } from "react";
import "./Forgotpwd.css";
import { MdClose, MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const OTP = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [otp, setOtp] = useState("");
  const [isValid, setValid] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/Mail");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow numeric input and limit to 6 characters
    if (/^[0-9]*$/.test(value) && value.length <= 6) {
      setOtp(value);
      setValid(value.length === 6);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "https://authentication-project-mern-server.onrender.com/api/auth";
      // const { data: res } = await axios.post(url, data);
      // localStorage.setItem("token", res.data);

      // Add your OTP validation logic here
      console.log("Submitted OTP:", otp);
      navigate("/Resetpwd");
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
                Enter OTP
              </motion.h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="input-box">
                  <span className="icon">
                    <MdEmail />
                  </span>
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={handleInputChange}
                    required
                  />
                  <motion.label
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    OTP
                  </motion.label>
                </div>
                {error && <div className="inputs error-msg">{error}</div>}
                <button className="btn" disabled={!isValid}>
                  Click
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OTP;
