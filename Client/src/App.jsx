import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Mail from "./Components/Forgotpwd/Mail.jsx";
import OTP from "./Components/Forgotpwd/OTP.jsx";
import Resetpwd from "./Components/Forgotpwd/Resetpwd.jsx";
import Main from "./Components/Home/Main.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <Routes>
      {/* {user && <Route path="/" exact element={<Main />} />} */}
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mail" element={<Mail />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/Resetpwd" element={<Resetpwd />} />
        <Route path="/Errorpage" element={<Errorpage />} />

      </Routes>
    </>
  );
}

export default App;
