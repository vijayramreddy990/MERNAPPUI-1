import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    //we can not store json data in local storage so we need to stringofy it
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inputBox"
        type={"text"}
        placeholder="Enter Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        type={"text"}
        placeholder="Enter Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        type={"password"}
        placeholder="Enter Password"
      />
      <button onClick={collectData} type="button" className="appButton">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
