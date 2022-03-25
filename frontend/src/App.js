
import './App.css';
import Form from './components/form/cadastro/form'

import api from "./services/api.js";
import { useState, useEffect } from 'react';
import Lista from './components/Lista/Lista';


function App() {
  const [produtos, setProdutos] = useState([]);

  function BuscarProdutos() {
    api
      .get("/produtos")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(BuscarProdutos, []);

  return (
    <div>

      <Form BuscarProdutos={BuscarProdutos} />
      <Lista produtos={produtos} BuscarProdutos={BuscarProdutos}
      />
    </div>
  );
}



export default App;
