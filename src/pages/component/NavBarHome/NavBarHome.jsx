import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "./NavbarHome.css";

const NavbarHome = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/home">
          <img
            src="src/img/LOGO BUSCMED.png"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
      </div>
      <ul className="navbar-buttons">
        <li>
          <ScrollLink to="page-two" smooth={true} duration={500}>Sobre nós</ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-tree" smooth={true} duration={500}>Nossa Localização</ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-four" smooth={true} duration={500}>Fale conosco</ScrollLink>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHome;
