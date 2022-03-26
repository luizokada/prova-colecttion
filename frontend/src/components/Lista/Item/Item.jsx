import React, { useState } from "react";
import Botao from "../../Botao/Botao";
import api from "../../../services/api";
import Modal from "../../Modal/Modal";
import FormEdicao from "../../form/Edicao/FormEdicao";
import ConfirmacaoExclusao from "../../Confirmacao/ConfirmacaoExclusao/ConfirmarcaoEsclusao";
import "./style.css";
import CaixaDeChecagem from "../../CaixaDeCheacagem/CaixaDeChecagem";

function Item(props) {
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const { produto, BuscarProdutos } = props;
  const dataClass = produto.ativo ? "item-nao-ativo" : "item-ativo";
  const data = produto.ativo ? "teste" : `${produto.dataInativacao}`;

  function onCloseModalEditar() {
    setModalEditar(false);
  }

  function onCloseModalExcluir() {
    setModalExcluir(false);
  }

  return (
    <li className="list-item">
      <div className="list-item-content">
        <div className="image-container">
          <img src={produto.thumb} />
        </div>

        <h2>Nome do Produto</h2>
        <p>{produto.nome}</p>

        <h2>Marca</h2>
        <p>{produto.marca}</p>

        <h2>Descricao</h2>
        <p>{produto.descricao}</p>

        <CaixaDeChecagem label="Ativo" checked={produto.ativo} />

        <div className={dataClass}>
          <h2>Data de inativação</h2>
          <p> {data}</p>
        </div>

        <div className="list-item-botton">
          <Botao texto="Excluir" onClick={() => setModalExcluir(true)} />
          <ConfirmacaoExclusao
            title={`Deseja realmente excluir o item ${produto.nome}`}
            onClose={onCloseModalExcluir}
            aberto={modalExcluir}
            BuscarProdutos={BuscarProdutos}
            produto={produto}
            read={true}
          />
          <Botao texto="Editar" onClick={() => setModalEditar(true)} />
          <Modal
            title="Editar Produto"
            onClose={onCloseModalEditar}
            aberto={modalEditar}
          >
            <FormEdicao
              BuscarProdutos={BuscarProdutos}
              onClose={onCloseModalEditar}
              produtoAntigo={produto}
            />
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default Item;
