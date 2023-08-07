import { useNavigate } from 'react-router-dom';
import "./ProfilePage.css";
import NavbarPerfil from '../component/NavBarPerfil/NavBarPerfil';

const ProfilePage = () => {
    const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); 
  }

  return (
    <div>< NavbarPerfil/>
    <div className="profile-page">
      <button className="back-button" onClick={handleGoBack}>Voltar</button>

      <h1>Perfil do Usuário</h1>

      {/* Imagem de construção */}
      <img
        src= "src/img/contrucao proj.jpeg"
        alt="Em construção"
        className="construction-image"
      />

      {/* Elemento para indicar que a página está em construção */}
      <p className="construction-message">Esta página está em construção. Em breve estará disponível.</p>
    </div>
    </div>
  );
};

export default ProfilePage;
