import React from 'react';
import { useState, useEffect } from 'react';
import Botao from '../../Botao/Botao.jsx';

import api from '../../../services/api.js';

function FormBusca(props) {
    const [nome, setNome] = useState('');


    function busca(evento) {
        evento.preventDefault();
        props.BuscarPorNome(nome)
        setNome('')
    }
    return (
        <div>

            <form
                onSubmit={busca}
            >
                <label htmlFor='Barra-de-Busca'> Disgite o nome do Produto que deseja buscar</label>
                <input
                    name='Barra-de-Busca'
                    type="text"
                    value={nome}
                    onChange={(evento) => {
                        setNome(evento.target.value)
                    }}
                />
                <Botao
                    texto="Buscar"
                />
            </form>
            <Botao
                texto="Início"
                onClick={() => props.BuscarProdutos()}
            />
        </div>
    );
}

export default FormBusca; 
