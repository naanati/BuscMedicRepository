import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./NavBarPesq.css";

const NavBarPesq = () => {
    const navigate = useNavigate();

  const handleVoltar = () => {
    // Implemente aqui a lógica para voltar para a página anterior ou para a página Home
    console.log('Usuário clicou em Voltar');
    // Redireciona o usuário para a página Home ou para a página anterior
    navigate(-1);
  };

  return (
    <nav className="NavBarPesq-navbar">
      <div>
        <Link to="/">
          <img
            src="src/img/LOGO BUSCMED.png"
            alt="Logo"
            className="NavBarPesq-navbar-logo"
          />
        </Link>
      </div>
      <ul className="NavBarPesq-navbar-buttons">
        <li>
          <button className="NavBarPesq-voltar-button" onClick={handleVoltar}>Voltar</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarPesq;
