import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  const navItems = [
    { name: "SHOP", link: "/shop" },
    { name: "LOGIN & REGISTER", link: "/sign" },
  ];
  return (
    <Styles>
      <nav className="navbar">
        <NavLink exact to="/">
          <Logo logo="/image/logo.jpg" />
        </NavLink>
        <ul>
          {navItems.map((item) => (
            <NavItem navpath={item.link} navItem={item.name} />
          ))}

          <NavLink to="/checkout">
            <GrCart width="500px" />
          </NavLink>
        </ul>
      </nav>
    </Styles>
  );
};

export default Navbar;

const Styles = styled.nav`
  .navbar {
    display: flex;
    width: 100%;
    height: 10vh;
    justify-content: space-between;
    /* background-color: blue; */
    align-items: center;
    border-bottom: 1px solid #000;
  }
  .navbar > ul {
    list-style: none;
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    /* background-color:red; */
  }
`;
