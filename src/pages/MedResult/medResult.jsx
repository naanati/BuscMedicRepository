import { useState, useEffect } from "react";
import { api } from "../../service/api";
import BuscMedPaciente from "../component/BuscMedPaciente/BuscMedPaciente";
import NavBarPesq from "../component/NavBarPesq/NavBarPesq";
import "./MedResult.css";



const MedResult = () => {
  // Estado para armazenar a lista de medicamentos cadastrados
  
  const [pesqMedicamentos, setPesqMedicamentos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [medicamentoPesquisado, setMedicamentoPesquisado] = useState(""); // Novo estado para o medicamento pesquisado

  // Função para obter os medicamentos cadastrados na API
  const MedicamentosCad = async () => {
    try {
      const response = await api.get("/medicamentos/");
      console.log(response.data.medicamentos);
      setPesqMedicamentos(response.data.medicamentos);
    } catch (error) {
      console.error("Erro ao obter os medicamentos cadastrados:", error);
    }
  };

  // Chamada da função para obter os medicamentos cadastrados ao montar o componente
  useEffect(() => {
    MedicamentosCad();
  }, []);


  // Função para voltar à página de pesquisa
  const Voltar = () => {
    setSearchTerm("");
  // Limpar o medicamento pesquisado ao voltar
    setMedicamentoPesquisado(""); 
  };

  // Filtrar medicamentos com base no termo de pesquisa
  const filMedicamentos = pesqMedicamentos.filter((medic) =>
    medic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBarPesq />
      <div className="container-Research">
        <div className="rectangle-Research">
          <img
            src="src/img/pesquisa.png"
            alt="Ícone do Medicamento"
            className="icon-Research"/>
          <h2 className="title-Research">Pesquisa de Medicamento</h2>
          <div className="search-Research-box">
            <input
              type="text"
              placeholder="Digite o nome do medicamento"
              className="search-Research"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={Voltar} className="search-Research-btn"> Limpar campos</button>
          </div>
          {medicamentoPesquisado && (
            <div className="medicamento-pesquisado">
              <h3>{medicamentoPesquisado.name}</h3>
              <p>Descrição: {medicamentoPesquisado.description}</p>
            </div>
          )}
          <div className="medicamentos-container-pesq">
            {filMedicamentos.length > 0 ? (
              filMedicamentos.map((medicamento) => (
                <BuscMedPaciente
                  key={medicamento.id}
                  medicamento={medicamento}
                  onVoltar={Voltar}
                />
              ))
            ) : (
              <p>Nenhum medicamento cadastrado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedResult;
