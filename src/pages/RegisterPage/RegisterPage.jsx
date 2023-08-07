import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from "../../service/api"
import NavBarPesq from "../component/NavBarPesq/NavBarPesq"
import "./RegisterPage.css";

  const RegisterPage = () => {

  const history = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cpf, setCpf] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [telefone, setTelefone] = useState('')
  const [unidade, setUnidade] = useState('')
  const [senha, setSenha] = useState('') //muda estado


async function handleSubmit(e) { // função para formulario
    e.preventDefault()
    await api.post("/posto", {
    "name": name,
    "email": email,
    "endereco": endereco,
    "cpf": cpf,
    "estado": estado,
    "cidade": cidade,
    "bairro": bairro,
    "telefone": telefone,
    "unidade": unidade, 
    "senha": senha
  })
  .then((response) => {
    if(response.data.message.errors){
      alert("Falha ao cadastrar Usuário")
    }
    alert("Usuário Cadastrado com Sucesso")
    history("/login");
  })
  .catch((error) => {
    alert("Erro ao cadastrar.")
    console.log(error)
  });

}


const navigate = useNavigate();

  const handleVoltar = () => {
    // Implemente aqui a lógica para voltar para a página anterior ou para a página Home
    console.log('Usuário clicou em Voltar');
    // Redireciona o usuário para a página Home ou para a página anterior
    navigate(-1);
  };

   return (
    <div><NavBarPesq/>
    <div className="CadPage-container">
      <h1>Cadastro</h1>
      <form className="CadPage-form" onSubmit={handleSubmit}>
        <div className="CadPage-form-group">
          <label htmlFor="nomePosto">Nome Completo</label>
          <input
            type="text"
            id="nomePosto"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="CadPage-form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="CadPage-form-group">
          <label htmlFor="unidade">Unidade do Posto de Saúde</label>
          <input
            type="text"
            id="unidade"
            name="unidade"
            value={unidade}
            onChange={(e) => setUnidade(e.target.value)}
            required
          />
        </div>
        <div className="CadPage-form-group">
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div className="CadPage-form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          </div>
          <div className="CadPage-form-group">
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
            />
          </div>
          <div className="CadPage-form-group">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              id="estado"
              name="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
          <div className="CadPage-form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="CadPage-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <div className="CadPage-form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
        </div>
        <div className="CadPage-btn-group">
          <button type="submit" className="CadPage-btn-cadastrar">Cadastrar</button>
          <button onClick={handleVoltar} className="CadPage-btn-voltar">Voltar</button>
        </div>
      </form>
      <div className="CadPage-login-link">
        <span>Já tem cadastro?</span>
        <a href="/login">Faça seu login</a>
      </div>
      </div>
      </div>
   
    

);
};

export default RegisterPage;
