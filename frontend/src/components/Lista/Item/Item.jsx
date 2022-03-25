import React from 'react';
import Botao from '../../Botao/Botao';
import api from '../../../services/api';
function Item(props) {
    function excluirProduto(id) {
        api
            .delete(`/produtos/${props._id}`)
            .then((response) => props.BuscarProdutos())
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }
    return (
        <li>
            <img src={props.thumb} />
            <p>{props.nome}</p>
            <p>{props.marca}</p>
            <p>{props.descricao}</p>
            <Botao
                text="Editar" />
            <button
                onClick={() => excluirProduto(props._id)}>Excluir</button>
        </li>
    );
}

export default Item;