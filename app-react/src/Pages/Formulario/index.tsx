import BotaoCustom from "../../Components/Botao/botao.styled";
import { useState } from "react";
interface FormularioInterface {
  className?: string;
}

const Formulario = ({ className }: FormularioInterface) => {
  const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  return (
    <>
      <div className={className}>
        <h1>Formulário</h1>
        <div className={`${className}`}>
          <label htmlFor="inputNome">Nome:</label>
          <input
            name="nome"
            id="inputNome"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(evt) => {
              setNome(evt.target.value);
            }}
          />
          <label htmlFor="inputSigla">Sigla:</label>
          <input
            name="sigla"
            id="inputSigla"
            type="text"
            placeholder="Sigla"
            value={sigla}
            onChange={(evt) => {
              setSigla(evt.target.value);
            }}
          />
        </div>
        <div>
          <BotaoCustom
            className="botao-custom"
            severity="primary"
            label="SALVAR"
            onClick={() => {
              setMensagemErro("");
              if (nome === "") {
                setMensagemErro("Preencha o nome corretamente.");
                return;
              } else if (sigla === "") {
                setMensagemErro("Preencha a sigla corretamente.");
                return;
              }
            }}
          />
        </div>
        {mensagemErro != "" && (
          <div className="mensagemErro">{mensagemErro}</div>
        )}
      </div>
    </>
  );
};

export default Formulario;
