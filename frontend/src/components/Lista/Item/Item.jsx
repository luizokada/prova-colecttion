import React from 'react';
import Botao from '../../Botao/Botao';
import api from '../../../services/api';
function Item(props) {
    function excluirProduto(id) {
        api
            .delete(`/produtos/${props._id}`)
            .then((response) => { props.BuscarProdutos(); console.log(response.data) })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }

    function editarProduto(id) {
        console.log("alo")

    }


    return (
        <li>
            <img src={props.thumb} />
            <p>{props.nome}</p>
            <p>{props.marca}</p>
            <p>{props.descricao}</p>

            <Botao
                text="Excluir"
                onClick={() => excluirProduto(props._id)}
            />
            <Botao
                text="Editar"
                onClick={() => editarProduto()}
            />
        </li>
    );
}

export default Item;