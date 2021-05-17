import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "./login.css";
// import axios from "axios";

function Register({regActive}) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4040/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setError({ found: true, message: data.error });
      }
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    
      <section className={`create-account ${regActive}`} >
        <MdAccountCircle size="200px" color="#fff" />

        <div className="account-creation">
          {error.found && <p>{error.message}</p>}
          <form onSubmit={registerSubmit}>
            <h2>Sign Up</h2>
            <div class="individual-sections">
              <label for="">Firstname</label>
              <br />
              <input
                type="text"
                name="firstName"
                required
                placeholder=""
                value={user.name}
                onChange={onChangeInput}
              />
              <br />
            </div>

            <div class="individual-sections">
              <label for="">Lastname</label>
              <br />
              <input
                type="text"
                name="lastName"
                required
                placeholder=""
                value={user.name}
                onChange={onChangeInput}
              />
              <br />
            </div>

            <div class="individual-sections">
              <label for="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                required
                placeholder=""
                value={user.email}
                onChange={onChangeInput}
              />
              <br />
            </div>

            <div class="individual-sections">
              <label for="">Password</label>
              <input
                type="password"
                name="password"
                required
                autoComplete="on"
                placeholder=""
                value={user.password}
                onChange={onChangeInput}
              />
              <p> Password must be at least 6 Characters.</p>
            </div>
            <div className="individual-sections two-sides">
              <br />
              <div>
                <button type="submit"> Sign Up</button>
              </div>
              <div className="s-up">
                <Link to="/login">Login</Link>
              </div>
              <br />
            </div>
          </form>
        </div>
    </section>
  );
}

export default Register;
