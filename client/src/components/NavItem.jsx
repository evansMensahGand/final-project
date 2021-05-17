import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavItem = (props) => {
  return (
    <Styles>
      <NavLink to={props.navpath}>
        <li className="navitem">{props.navItem}</li>
      </NavLink>
    </Styles>
  );
};

export default NavItem;

const Styles = styled.li`
  .navitem {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
