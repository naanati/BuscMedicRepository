import { useState, useEffect } from "react";
import { useMemo } from "react";
import MedicamentoItem from "../component/MedItem/medItem";
import EditMed from "../component/EditMed/EditMed";
import { api } from "../../service/api";
import "./ListaMed.css";

const ListaMed = () => {
  // Estado para armazenar a lista de medicamentos cadastrados
  const [medicamentos, setMedicamentos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicamento, setSelectedMedicamento] = useState(null);

  // Função para obter os medicamentos cadastrados na API
  const MedicamentosCadastrados = async () => {
    try {
      const response = await api.get("/medicamentos/");
      console.log(response.data.medicamentos);
      setMedicamentos(response.data.medicamentos);
    } catch (error) {
      console.error("Erro ao obter os medicamentos cadastrados:", error);
    }
  };

  // Chamada da função para obter os medicamentos cadastrados ao montar o componente
  useEffect(() => {
    MedicamentosCadastrados();
  }, []);

  const filteredMedicamentos = useMemo(() => medicamentos.filter((medic) => (
    medic.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [medicamentos, searchTerm]);

  const EditarDados = async (medicamentoEditado) => {
    try {
      // Realiza a requisição PUT para atualizar o medicamento no backend
      const response = await api.put(`/medicamentos/${medicamentoEditado.id}`, medicamentoEditado);
  
      // Verifica se a edição foi bem-sucedida antes de atualizar a lista de medicamentos
      if (response.status === 200) {
        // Atualizando a lista de medicamentos com o medicamento que foi editado
        const medicamentosAtualizados = medicamentos.map((medicamento) =>
          medicamento.id === medicamentoEditado.id ? medicamentoEditado : medicamento
        );
        setMedicamentos(medicamentosAtualizados);
        alert("Medicamento editado com sucesso!");
      } else {
        alert("Erro ao editar medicamento. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao editar medicamento:", error);
      alert("Erro ao editar medicamento. Tente novamente mais tarde.");
    } finally {
      // Limpa o medicamento selecionado após a edição dele
      setSelectedMedicamento(null);
    }
  };

  const ExcluirDados = async (id) => {
  try {
    // Realiza a requisição DELETE para excluir o medicamento pelo ID
    await api.delete(`/medicamentos/${id}`);

    // Atualiza a lista de medicamentos após a exclusão
    const medicamentosAtualizados = medicamentos.filter(
      (medicamento) => medicamento.id !== id
    );
    setMedicamentos(medicamentosAtualizados);

    // Limpa o medicamento selecionado após a exclusão
    setSelectedMedicamento(null);
    alert("Medicamento excluído com sucesso!");}
     catch (error) {
    console.error("Erro ao excluir medicamento:", error);
    alert("Erro ao excluir medicamento. Tente novamente mais tarde.");
  }
};

  return (
    <div>
      <div className="lista-container">
        <h1>Medicamentos Cadastrados</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar medicamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="medicamentos-container">
          {filteredMedicamentos.length > 0 ? (
            filteredMedicamentos.map((medicamento) => (
              <MedicamentoItem
                key={medicamento.id}
                medicamento={medicamento}
                onEditar={() => setSelectedMedicamento(medicamento)}
                onExcluir={() => ExcluirDados(medicamento.id)}
              />
            ))
          ) : (
            <p>Nenhum medicamento cadastrado.</p>
          )}
        </div>
        {selectedMedicamento && (
          <EditMed medicamento={selectedMedicamento} onEditar={EditarDados} />
        )}
      </div>
    </div>
  );
};

export default ListaMed;
