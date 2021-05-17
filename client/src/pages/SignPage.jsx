import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { SignFooter } from "../components/auth/SignFooter";
import { useState } from "react";
import styled from "styled-components";
import SignNav from "../components/auth/SignNav";

const SignPage = () => {
  const [login, setLogin] = useState();
  const [reg, setReg] = useState("pageOff");

  const handleReg = () => {
    setLogin("pageOff");
    setReg(null);
  };
  const handleLogin = () => {
    setReg("pageOff");
    setLogin(null);
  };

  return (
    <Styles>
      <div className="signpage">
        <SignNav signclick={handleLogin} regClick={handleReg} />
        <Login loginActive={login} />
        <Register regActive={reg} />
        <SignFooter />
      </div>
    </Styles>
  );
};

export default SignPage;

const Styles = styled.div``;
