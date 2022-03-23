import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.log(name, email, password);
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
