import "./App.css";
import "./style.css";
import Form from "./components/form/Cadastro/FormCadastro";

import api from "./services/api.js";
import { useState, useEffect } from "react";
import Lista from "./components/Lista/Lista";
import FormBusca from "./components/form/Busca/FormBusca";
import Modal from "./components/Modal/Modal";
import Botao from "./components/Botao/Botao";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [modalCadastro, setModalCadastro] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

  function BuscarProdutos() {
    api
      .get("/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function BuscarPorNome(nome) {
    api
      .get(`http://localhost:5000/produtos/busca?nome=${nome}`)
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function onCloseModalCadastro() {
    setModalCadastro(false);
  }

  useEffect(BuscarProdutos, []);

  return (
    <div>
      <div className="app-header">
        <center>
          <div className="app-botao">
            <Botao texto="Cadastro" onClick={() => setModalCadastro(true)} />
            <Botao texto="Início" onClick={() => BuscarProdutos()} />
          </div>
        </center>
        <Modal
          aberto={modalCadastro}
          title="Cadastro de Produtos"
          onClose={onCloseModalCadastro}
        >
          <Form BuscarProdutos={BuscarProdutos} />
        </Modal>
        <FormBusca
          BuscarPorNome={BuscarPorNome}
          BuscarProdutos={BuscarProdutos}
        />
      </div>
      <Lista produtos={produtos} BuscarProdutos={BuscarProdutos} />
    </div>
  );
}

export default App;
