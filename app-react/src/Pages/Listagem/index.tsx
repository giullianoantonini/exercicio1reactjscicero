import { Link } from "react-router-dom";

interface ListagemProps {
  className?: string;
}

const items = [
  {
    id_departamento: 1,
    nome: "Recursos Humanos",
    sigla: "RH",
  },
  {
    id_departamento: 2,
    nome: "Financeiro",
    sigla: "FINANC",
  },
  {
    id_departamento: 3,
    nome: "Contabilidade",
    sigla: "CONTAB",
  },
];

const Listagem = ({ className }: ListagemProps) => {
  return (
    <>
      <h1>Listagem</h1>
      <table className={`${className}`}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>
                <Link to={`item.id_departamento`}>{item.nome}</Link>
              </td>
              <td>{item.sigla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listagem;
