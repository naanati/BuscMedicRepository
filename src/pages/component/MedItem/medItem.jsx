import { useEffect } from "react";
import PropTypes from "prop-types";
import "./MedItem.css";

const MedItem = ({ medicamento, onEditar, onExcluir }) => {
  useEffect(() => {
    console.log(medicamento)
}, [medicamento])
  return (
    <div className="medicamento-item">
      <p>Nome: {medicamento.name}</p>
      <p>Data de Validade: {medicamento.data}</p>
      <p>Quantidade: {medicamento.quantidade}</p>
      <p>Descrição: {medicamento.descricao}</p>
      <button className="editarbtn"onClick={() => onEditar(medicamento.id)}>Editar</button>
      <button className="excluirbtn" onClick={() => onExcluir(medicamento.id)}> Excluir</button>
    </div>
  );
};


MedItem.propTypes = {
    medicamento: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    quantidade: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
  onEditar: PropTypes.func.isRequired,
  onExcluir: PropTypes.func.isRequired,
};

export default MedItem;
