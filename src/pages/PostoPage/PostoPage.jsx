import { useNavigate } from 'react-router-dom';
import NavbarPerfil from '../component/NavBarPerfil/NavBarPerfil';

import "./PostoPage.css";

const PostoPage = () => {
  const navigate = useNavigate();

  const handlePerfilClick = () => {
    navigate("/perfil"); // Redireciona para a página /perfil
  };

  const handleMedicamentoListaClick = () => {
    navigate("/cadastroMedicamento"); // Redireciona para a página /MedicamentoLista+Cadastro
  };


  return (
    // Contêiner principal da página de perfil do posto
    <div>< NavbarPerfil/>
    <div className="profile-page">
      {/* Retângulo com o logo, título e botões do perfil */}
      <div className="profile-box">
        <img src="src/img/LOGO BUSCMED.png" alt="Ícone" width="80px" height="80px" />
        <h2>Busca de Medicamentos</h2>
        <div className="buttons-container">
          {/* Primeira fileira de botões */}
          <div className="button-row">
            <div className="button" onClick={handlePerfilClick}>
              <img src="src/img/hospital.png" alt="Ícone de perfil" width="25px" height="25px" />
              <p>Perfil</p>
            </div>
            <div className="button" onClick={handleMedicamentoListaClick}>
              <img src="src/img/remedio.png" alt="Ícone de medicamentos" width="25px" height="25px" />
              <p>Medicamentos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PostoPage;
