import React, { useState } from 'react';
import Botao from '../../Botao/Botao';
import api from '../../../services/api';
import Modal from '../../Modal/Modal';
import FormEdicao from '../../form/Edicao/FormEdicao';
import ConfirmacaoExclusao from '../../Confirmacao/ConfirmacaoExclusao/ConfirmarcaoEsclusao';
function Item(props) {

    const [modalEditar, setModalEditar] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);

    function onCloseModalEditar() {
        setModalEditar(false)

    }

    function onCloseModalExcluir() {
        setModalExcluir(false)

    }


    return (
        <li>
            <img src={props.produto.thumb} />
            <p>{props.produto.nome}</p>
            <p>{props.produto.marca}</p>
            <p>{props.produto.descricao}</p>

            <Botao
                texto="Excluir"
                onClick={() => setModalExcluir(true)}
            />
            <ConfirmacaoExclusao
                onClose={onCloseModalExcluir}
                aberto={modalExcluir}
                BuscarProdutos={props.BuscarProdutos}
                produto={props.produto}


            />
            <Botao
                texto="Editar"
                onClick={() => setModalEditar(true)}
            />
            <Modal
                onClose={onCloseModalEditar}
                aberto={modalEditar}

            >
                <FormEdicao
                    BuscarProdutos={props.BuscarProdutos}
                    onClose={onCloseModalEditar}
                    produto={props.produto}
                />
            </Modal>
        </li>
    );
}

export default Item;