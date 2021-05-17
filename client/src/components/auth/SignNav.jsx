import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import ProductButons from "../ProductButons";

const SignNav = ({signclick,regClick}) => {
  return (
    <Styles>
      <div className="signnav">
        <NavLink exact to="/">
          <Logo logo="arrow-left.svg" newclass="signlogo" />
        </NavLink>
        <ProductButons onClick={signclick} btnText="Sign In" />
        <ProductButons onClick={regClick} btnText="Sign Up" />
      </div>
    </Styles>
  );
}

export default SignNav;

const Styles = styled.div `
.signnav{
  display:flex;
  width:50%;
  padding:1rem;
  margin:auto;
  justify-content:space-evenly;
  align-items:center;

}


`
