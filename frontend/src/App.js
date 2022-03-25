
import './App.css';
import Form from './components/form/Cadastro/FormCadastro'

import api from "./services/api.js";
import { useState, useEffect } from 'react';
import Lista from './components/Lista/Lista';
import FormBusca from './components/form/Busca/FormBusca';
import Modal from './components/Modal/Modal';
import Botao from './components/Botao/Botao';


function App() {
  const [produtos, setProdutos] = useState([]);
  const [modalCadastro, setModalCadastro] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

  function BuscarProdutos() {

    api
      .get("/produtos")
      .then((response) => { setProdutos(response.data); })
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
    setModalCadastro(false)

  }


  useEffect(BuscarProdutos, []);

  return (
    <div>
      <Botao
        texto="Cadastro"
        onClick={() => setModalCadastro(true)}
      />
      <Modal
        aberto={modalCadastro}
        onClose={onCloseModalCadastro}
      >

        <Form
          BuscarProdutos={BuscarProdutos}
        />
      </Modal>
      <FormBusca
        BuscarPorNome={BuscarPorNome}
        BuscarProdutos={BuscarProdutos}
      />
      <Lista
        produtos={produtos}
        BuscarProdutos={BuscarProdutos}
      />
    </div>
  );
}



export default App;
