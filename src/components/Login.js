import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
    console.log(result);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        value={email}
        className="inputBox"
        type={"text"}
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={password}
        className="inputBox"
        type={"password"}
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
