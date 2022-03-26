import React from "react";
import Botao from "../../Botao/Botao";
import Modal from "../../Modal/Modal";
import api from "../../../services/api";
import "./style.css";

function ConfirmacaoExclusao(props) {
  const { aberto, produto, onClose, title, BuscarProdutos } = props;
  function excluirProduto(id) {
    api
      .put(`/produtos/${produto._id}`, { ...produto, ativo: false })
      .then((response) => {
        BuscarProdutos();
        onClose();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <Modal aberto={aberto} onClose={onClose} title={title}>
      <div className="modal-delete">
        <Botao
          texto="SIM"
          onClick={() => {
            excluirProduto(produto._id);
            onClose();
          }}
        ></Botao>
        <Botao
          onClick={() => {
            onClose();
          }}
          texto="NAO"
        ></Botao>
      </div>
    </Modal>
  );
}

export default ConfirmacaoExclusao;
