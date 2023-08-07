import PropTypes from "prop-types";
import "./BuscMedPaciente.css";

const BuscMedPaciente = ({ medicamento }) => {
  return (
    <div className="result-container">
      <h2>Detalhes do Medicamento</h2>
      <div className="medicamento-info">
        <p>Unidade: Posto Central</p>
        <p>Nome: {medicamento.name}</p>
        <p>Data de Validade: {medicamento.data}</p>
        <p>Quantidade: {medicamento.quantidade}</p>
        <p>Descrição: {medicamento.descricao}</p>
      </div>
      </div>

  );
};

BuscMedPaciente.propTypes = {
  medicamento: PropTypes.shape({
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    quantidade: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
  onVoltar: PropTypes.func.isRequired,
};

export default BuscMedPaciente;
