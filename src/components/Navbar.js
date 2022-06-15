import { NavbarContainer, NavbarItems } from "../css/Navbar.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarItems>Home</NavbarItems>
      </Link>
      <Link to="/breeds">
        <NavbarItems>Breeds</NavbarItems>
      </Link>
      <Link to="/contact">
        <NavbarItems>Contact</NavbarItems>
      </Link>
    </NavbarContainer>
  );
};

export default NavBar;
