import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from "../../service/api";
import NavBarPesq from "../component/NavBarPesq/NavBarPesq";
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/login", {
      email: email,
      senha: senha,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      alert("Logado com sucesso");
      navigate('/inicial');
    })
    .catch(() => {
      alert("Erro inesperado");
    });
  }

  function handleBack() {
    // Implement the logic for going back to the previous page here
    navigate(-1); // Use navigate to go back to the previous page
  }

  return (
    <div><NavBarPesq/>
    <div className="login-page-container"> 
      <div className="login-content-container">
        {/* Div com um retângulo à esquerda*/}
        <div className="retangulo-esquerdo">
          <div className="contato-image">
            <img src="src/img/loginposto.png" alt="Imagem de contato" />
            <h2>BuscMed</h2>
          </div>
          
        </div>
        {/* Div com um retângulo à direita, login */}
        <div className="retangulo-direito">
        <div className="logo-image">
            <img src="src/img/LOGO BUSCMED.png" alt="Imagemlogo" />
            </div>
            {/* Formulário de login. */}
          <form onSubmit={handleSubmit} className="login-form">
          <p className="acesso-title">Acesse sua conta</p>
            <div className="login-input">
            <input 
              type="text"
              name="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="login-input">
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="login-password">
          </div>
        </div>
        <button type="submit" className="login-btn">Login</button>
        <button onClick={handleBack} className="btn-volta">Voltar</button>
      </form>
        <div className="register-link">
        <span>Não tem login?</span>
        <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </div>
      </div>
      </div>
      </div>
  
  );
  };


export default LoginPage;