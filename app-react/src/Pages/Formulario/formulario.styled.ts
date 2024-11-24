import styled from "styled-components";
import Formulario from "."; // Certifique-se de que o caminho esteja correto

const FormularioEstilizado = styled(Formulario)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;

  label {
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .mensagemErro {
    background-color: #e07373;
    padding: 10px;
    border-radius: 4px;
  }
`;

export default FormularioEstilizado;
