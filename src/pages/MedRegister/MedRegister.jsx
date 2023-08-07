import { useState } from "react";
import { api } from "../../service/api";
import NavbarPerfil from "../component/NavBarPerfil/NavBarPerfil";
import ListaMed from "../ListaMed/ListaMed";
import "./MedRegister.css";

const MedRegister = () => {
  // Estado para armazenar a lista de medicamentos cadastrados
  const [medicamentos, setMedicamentos] = useState([]);
  // Estados para armazenar os dados do novo medicamento a ser cadastrado
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [postoId, setpostoId] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para limpar os campos de entrada
  const limparCampos = () => {
    setName("");
    setData("");
    setQuantidade("");
    setpostoId("");
    setDescricao("");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .post("/medicamentos", {
        // Cria um novo objeto com os dados do medicamento
        name,
        data,
        quantidade,
        postoId,
        descricao,
      })
      .then((response) => {
        if (response.data.message.errors) {
          return alert("Falha ao cadastrar Medicamento");
        }
        // Adiciona o novo medicamento à lista de medicamentos
        setMedicamentos([...medicamentos, response.data]);
        return alert("Medicamento cadastrado com Sucesso");
      })
      .catch(() => {
        return alert("Medicamento não Cadastrado");
      });
    // Limpa os campos de entrada após o cadastro
    limparCampos();
  }

  return (
    <div>< NavbarPerfil/>
    <div className="RegiMed-cadastro-container">
      <h1>Cadastro de Medicamentos</h1>
      <form className="RegiMed-form-container" onSubmit={handleSubmit}>
        <div className="RegiMed-input-container">
          <label htmlFor="nome">Nome do medicamento</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="RegiMed-input-container">
          <label htmlFor="dataValidade">Data de validade</label>
          <input
            type="date"
            id="data"
            name="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div className="RegiMed-input-container">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="string"
            id="quantidade"
            name="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />
        </div>
        <div className="RegiMed-input-container">
          <label htmlFor="unidade">Unidade Posto de Saúde</label>
          <input
            type="text"
            id="postoId"
            name="postoId"
            value={postoId}
            onChange={(e) => setpostoId(e.target.value)}
            required
          />
        </div>
        <div className="RegiMed-input-container">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="RegiMed-buttons-container">
            <button type="submit">Cadastrar</button>
            <button type="button" onClick={limparCampos}>Limpar Campos</button>
          </div>
        </form>
      {/* Chame o componente ListaMed dentro da div RegiMed-cadastro-container */}
      <ListaMed medicamentos={medicamentos} />
      </div>
    </div>
  );
};


export default MedRegister;