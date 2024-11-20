import styled from "styled-components";
import Listagem from "."; // Certifique-se de que o caminho esteja correto

const ListagemEstilizada = styled(Listagem)`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f2f2f2;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: lightblue;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ListagemEstilizada;
