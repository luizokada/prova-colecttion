import React from 'react';
import Botao from '../../Botao/Botao';
import Modal from '../../Modal/Modal';
import api from '../../../services/api';

function ConfirmacaoExclusao(props) {

    function excluirProduto(id) {
        api
            .delete(`/produtos/${id}`)
            .then((response) => { props.BuscarProdutos(); console.log(response.data) })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }

    return (
        <Modal aberto={props.aberto}
            onClose={props.onClose}>
            <p>Deseja realmente excluir o item {props.nome}</p>
            <Botao
                texto="SIM"
                onClick={() => {
                    excluirProduto(props.produto._id);
                    props.onClose()
                }}
            ></Botao>
            <Botao
                onClick={() => { props.onClose() }}
                texto="NAO"></Botao>
        </Modal>
    );
}

export default ConfirmacaoExclusao;