import BotaoCustom from "../../Components/Botao/botao.styled";

interface FormularioInterface {
  className?: string;
}

const Formulario = ({ className }: FormularioInterface) => {
  return (
    <>
      <h1>Formulário</h1>
      <div className={`${className}`}>
        <label htmlFor="inputNome">Nome:</label>
        <input id="inputNome" type="text" placeholder="Nome" />
        <label htmlFor="inputIdade">Idade:</label>
        <input id="inputIdade" type="text" placeholder="Idade" />
      </div>
      <BotaoCustom
        className="botao-custom"
        severity="primary"
        label="ENVIAR"
      ></BotaoCustom>
    </>
  );
};

export default Formulario;
