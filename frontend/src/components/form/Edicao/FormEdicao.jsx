import React, { useState } from 'react';
import Botao from '../../Botao/Botao';
import api from '../../../services/api';

function FormEdicao(props) {
    const marcas = [
        { name: ' ' },
        { name: 'Portobello' },
        { name: 'Portinari' },
        { name: 'Deita' },
        { name: 'Decotiles' },
    ];

    const [nome, setNome] = useState(props.produto.nome);
    const [marca, setMarca] = useState(props.produto.marca);
    const [descricao, setDescricao] = useState(props.produto.descricao);
    const [thumb, setThumb] = useState(props.produto.thumb);
    const [ativo, setAtivo] = useState(props.produto.ativo);


    function editarProduto(evento) {
        evento.preventDefault();
        api.put(`/produtos/${props.produto._id}`,
            {

                "nome": nome,
                "marca": marca,
                "descricao": descricao,
                "thumb": thumb,
                "ativo": ativo

            })
            .then((response) => {
                props.BuscarProdutos();
                props.onClose();
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
                console.log(marca)
            });



    }

    return (
        <form onSubmit={editarProduto}>
            <label htmlFor='Nome-do-Produto'>Nome do Produto</label>

            <input
                placeholder="Nome do Produto"
                value={nome}
                type="text"
                name='Nome-do-Produto'
                onChange={evento => setNome(evento.target.value)}
                required
            />

            <label htmlFor="descricao">Descricao do Produto</label>
            <textarea name="descricao"
                onChange={evento => setDescricao(evento.target.value)}
                value={descricao}
                required


            />
            <label htmlFor="marca">Marca</label>
            <select name="marca"
                onChange={evento => setMarca(evento.target.value)}
                required
                value={marca}
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
                value={thumb}
                required
            />
            <label htmlFor='Ativo'>Produto ativo</label>
            <input
                type="checkbox"
                checked={ativo}
                name="Ativo"
                onChange={evento => setAtivo(evento.target.checked)} />
            <Botao
                texto="Editar" />
        </form>
    );
}

export default FormEdicao