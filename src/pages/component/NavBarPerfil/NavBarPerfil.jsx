import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./NavbarPerfil.css";

const NavbarPerfil = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Implemente aqui a lógica para fazer o logout do usuário, como limpar a sessão ou token do usuário.
    console.log('Usuário saiu do sistema');
    // Redireciona o usuário para a página Home após o logout
    navigate("/home");
  };

  return (
    <nav className="NavbarPerfil-navbar">
      <div>
        <Link to="/">
          <img
            src="src/img/LOGO BUSCMED.png"
            alt="Logo"
            className="NavbarPerfil-navbar-logo"
          />
        </Link>
      </div>
      <ul className="NavbarPerfil-navbar-buttons">
        <li>
          <button className="NavbarPerfil-logout-button" onClick={handleLogout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarPerfil;
