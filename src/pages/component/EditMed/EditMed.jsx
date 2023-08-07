import { useState } from "react";
import PropTypes from "prop-types";
import "./EditMed.css";

const EditMed = ({ medicamento, onEditar, onClose }) => {
  // Estado para gerenciar os inputs do formulário
  const [name, setNome] = useState(medicamento.name);
  const [data, setData] = useState(medicamento.data);
  const [quantidade, setQuantidade] = useState(medicamento.quantidade);
  const [descricao, setDescricao] = useState(medicamento.descricao);

  // Função para lidar com o clique no botão de editar
  const handleEditar = () => {
    // Criar um novo objeto com os dados editados
    const medicamentoEditado = {
      id: medicamento.id,
      name,
      data,
      quantidade,
      descricao,
    };
    // Chamar a função onEditar do componente pai para salvar as alterações
    onEditar(medicamentoEditado);
    // Fechar o formulário de edição
    onClose();
  };

  return (
    // Overlay de Edição de Medicamento
    <div className="edit-med-overlay">
      <div className="edit-med-container">
        <h2 className="edit-med-title">Editar Medicamento</h2>
        <form>
          {/* Campo para o Nome do Medicamento */}
          <div className="edit-med-input">
            <label htmlFor="nome">Nome do Medicamento</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          {/* Campo para a Data de Validade */}
          <div className="edit-med-input">
            <label htmlFor="dataValidade">Data de Validade</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          {/* Campo para a Quantidade */}
          <div className="edit-med-input">
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>
          {/* Campo para a Descrição */}
          <div className="edit-med-input">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          {/* Botão para Salvar a Edição */}
          <div className="edit-med-button">
            <button type="button" onClick={handleEditar}>Salvar Edição</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// PropTypes para o componente EditMed
EditMed.propTypes = {
  medicamento: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    quantidade: PropTypes.number.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
  onEditar: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditMed;
