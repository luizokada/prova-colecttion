
import './App.css';
import Form from './components/form/cadastro/form'

import api from "./services/api.js";
import { useState, useEffect } from 'react';
import Lista from './components/Lista/Lista';
import FormBusca from './components/Busca/FormBusca';


function App() {
  const [produtos, setProdutos] = useState([]);

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
  useEffect(BuscarProdutos, []);

  return (
    <div>

      <Form
        BuscarProdutos={BuscarProdutos} />
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
