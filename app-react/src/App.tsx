import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MenuEstilizado from "./Components/Menu/menu.styled";
import Home from "./Pages/Home";
import FormularioEstilizado from "./Pages/Formulario/formulario.styled.ts";
import ListagemEstilizada from "./Pages/Listagem/listagem.styled.ts";
import ListagemDetalhes from "./Pages/ListagemDetalhes/index.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <MenuEstilizado />
      <div className="conteiner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<FormularioEstilizado />} />
          <Route path="/listagem">
            <Route index element={<ListagemEstilizada />} />
            <Route path=":id" element={<ListagemDetalhes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
