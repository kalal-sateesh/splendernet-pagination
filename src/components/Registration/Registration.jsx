import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { addUser } from "./RegistrationSlice";
import styles from "../Registration/Registration.module.css";

const Registration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [fnameErrorMsg, setFnameErrorMsg] = useState("");
  const [lnameErrorMsg, setLnameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [mobileErrorMsg, setMobileErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [cpasswordErrorMsg, setCpasswordErrorMsg] = useState("");

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const userData = {
  //       fname: fname,
  //       lname: lname,
  //       email: email,
  //       mobile: mobile,
  //       password: password,
  //       cpassword: cpassword,
  //     };
  //     localStorage.setItem("userData", JSON.stringify(userData));
  //   }, [fname, lname, email, mobile, password, cpassword]);

  const stringRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!stringRegex.test(fname)) {
      setFnameErrorMsg("Please Enter First Name");
      setTimeout(() => {
        setFnameErrorMsg("");
      }, 2000);
      return;
    }
    if (!stringRegex.test(lname)) {
      setLnameErrorMsg("Please Enter last Name");
      setTimeout(() => {
        setLnameErrorMsg("");
      }, 2000);
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailErrorMsg("Please Enter a valid mail id");
      setTimeout(() => {
        setEmailErrorMsg("");
      }, 2000);
      return;
    }
    if (!mobile) {
      setMobileErrorMsg("Please Enter a valid number");
      setTimeout(() => {
        setMobileErrorMsg("");
      }, 2000);
      return;
    }
    if (!passwordRegex.test(password)) {
      setPasswordErrorMsg(
        "Password must be minimum 8 digits and one special character and alphanumeric characters"
      );
      setTimeout(() => {
        setPasswordErrorMsg("");
      }, 2000);
      return;
    }
    if (!passwordRegex.test(cpassword)) {
      setCpasswordErrorMsg(
        "Password must be minimum 8 digits and one special character and alphanumeric characters"
      );
      setTimeout(() => {
        setCpasswordErrorMsg("");
      }, 2000);
      return;
    }
    if (!(password === cpassword)) {
      setCpasswordErrorMsg("Password and conform password not matched");
      setTimeout(() => {
        setCpasswordErrorMsg("");
      }, 2000);
      return;
    }

    const userData = {
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      password: password,
      cpassword: cpassword,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(() => {
      alert("successfully registered");
      navigate("/login");
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={(e) => setFname(e.target.value)}
        placeholder="Enter First Name here"
        className={styles.input}
      ></input>
      <br></br>
      {fnameErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {fnameErrorMsg}
        </span>
      )}
      <br></br>
      <input
        onChange={(e) => setLname(e.target.value)}
        placeholder="Enter Last Name here"
      ></input>
      <br></br>
      {lnameErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {lnameErrorMsg}
        </span>
      )}
      <br></br>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email here"
      ></input>
      <br></br>
      {emailErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {emailErrorMsg}
        </span>
      )}
      <br></br>
      <input
        type="number"
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile number here"
      ></input>
      <br></br>
      {mobileErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {mobileErrorMsg}
        </span>
      )}
      <br></br>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password here"
      ></input>
      <br></br>
      {passwordErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {passwordErrorMsg}
        </span>
      )}
      <br></br>
      <input
        type="password"
        onChange={(e) => setCpassword(e.target.value)}
        placeholder="Enter conform password"
      ></input>
      <br></br>
      {cpasswordErrorMsg && (
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "red",
          }}
        >
          {cpasswordErrorMsg}
        </span>
      )}
      <br></br>
      <button onClick={handleRegister}>Signup</button>
    </div>
  );
};

export default Registration;
