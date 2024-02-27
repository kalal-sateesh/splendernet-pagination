import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const navigate = useNavigate();

  const initData = JSON.parse(localStorage.getItem("userData"));

  const { loginHandler: contextLoginHandler } = useContext(AuthContext);

  const handleAddUser = () => {
    navigate("/registration");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    if (!emailRegex.test(email)) {
      setErrorMsgEmail("Please enter email");
      setTimeout(() => {
        setErrorMsgEmail("");
      }, 2000);
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMsgPassword(
        "Password must be minimum 8 digits and one special character and alphanumeric characters"
      );
      setTimeout(() => {
        setErrorMsgPassword("");
      }, 2000);
      return;
    }
    const user = initData.email === email && initData.password === password;
    if (user) {
      setTimeout(() => {
        // loginHandler();
        alert("Login Success");
        contextLoginHandler();
        navigate("/");
      }, 2000);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="Enter Email here"
        ></input>
        <br></br>
        {errorMsgEmail && (
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Arial",
              color: "red",
            }}
          >
            {errorMsgEmail}
          </span>
        )}
        <br></br>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password here"
        ></input>
        <br></br>
        {errorMsgPassword && (
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Arial",
              color: "red",
            }}
          >
            {errorMsgPassword}
          </span>
        )}
      </div>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <br></br>
      <button onClick={handleAddUser}>Signup</button>
      <br></br>
      <br></br>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default Login;
