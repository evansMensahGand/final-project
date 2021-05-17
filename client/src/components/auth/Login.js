import React, { useState,useEffect } from "react";
// import axios from "axios";

import { Link } from "react-router-dom";
import "./login.css";
import { MdAccountCircle } from "react-icons/md";



function Login({ loginActive }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    found: false,
    message: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4040/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      if (!response.ok) {
        setError({ found: true, message: data.error });
      }
      console.log(data);
      localStorage.setItem("firstLogin", true);
      window.location.href = "/home";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <section className={`create-account ${loginActive}`}>
      <MdAccountCircle size="150px" color="#fff" />
      <div className="account-creation">
        {error.found && <p>{error.message}</p>}
        <form onSubmit={loginSubmit}>
          <h2>Login</h2>
          <div className="individual-sections">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={user.email}
              onChange={onChangeInput}
            />
            <hr />
            <br />
          </div>
          <div className="individual-sections">
            <input
              type="password"
              name="password"
              required
              autoComplete="on"
              placeholder="Password"
              value={user.password}
              onChange={onChangeInput}
            />
            <hr />
          </div>
          <div className="individual-sections two-sides">
            <br />
            <div>
              <button type="submit"> Login</button>{" "}
            </div>
            <div className="s-up">
              <Link to="/register">Sign Up</Link>
            </div>

            <br />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
