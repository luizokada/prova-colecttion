
import './App.css';
import Form from './components/form/cadastro/form'

import api from "./services/api.js";
import { useState, useEffect } from 'react';
import Lista from './components/Lista/Lista';

function App() {

  return (
    <div>
      <img src='https://imagens.portobello.com.br/unsafe/0x0/https://www.portobello.com.br//data/material/thumb-marmore.jpg'></img>
      <Form produtos={api} />
      <Lista
      />
    </div>
  );
}

export default App;
