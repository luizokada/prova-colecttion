import React from 'react';
import { useState, useEffect } from 'react';
import Botao from '../../Botao/Botao';

import api from "../../../services/api.js";

function Form(props) {

    const marcas = [
        { name: ' ' },
        { name: 'Portobello' },
        { name: 'Portinari' },
        { name: 'Deita' },
        { name: 'Decotiles' },
    ];

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [descricao, setDescricao] = useState('');
    const [thumb, setThumb] = useState('');


    function adcionarNovoProduto(evento) {
        evento.preventDefault();
        api.post("/produtos",
            {

                "nome": nome,
                "marca": marca,
                "descricao": descricao,
                "thumb": thumb,
                "ativo": true

            })
            .then((response) => {
                setNome('');
                setDescricao('');
                setMarca('')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }
    return (
        <form onSubmit={adcionarNovoProduto}>
            <label htmlFor='Nome-do-Produto'>Nome do Produto</label>

            <input
                placeholder="Nome do Produto"
                type="text"
                name='Nome-do-Produto'
                onChange={evento => setNome(evento.target.value)}
                required
            />

            <label htmlFor="descricao">Descricao do Produto</label>
            <textarea name="descricao"
                onChange={evento => setDescricao(evento.target.value)}
                required


            />
            <label htmlFor="marca">Marca</label>
            <select name="marca"
                onChange={evento => setMarca(evento.target.value)}
                required
            >
                {marcas.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
            <label htmlFor='Thumb-do-Produto'>Link da Imagem do produto</label>

            <input
                placeholder="Link da imagem"
                type="text"
                name='Thumb-do-Produto'
                onChange={evento => setThumb(evento.target.value)}
                required
            />
            <Botao
                text="Cadastrar" />
        </form>
    )
}
export default Form