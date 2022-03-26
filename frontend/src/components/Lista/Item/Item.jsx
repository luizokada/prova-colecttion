import React, { useState } from "react";
import Botao from "../../Botao/Botao";
import api from "../../../services/api";
import Modal from "../../Modal/Modal";
import FormEdicao from "../../form/Edicao/FormEdicao";
import ConfirmacaoInativacao from "../../Confirmacao/ConfirmacaoInativacao/ConfirmarcaoInativacao";
import "./style.css";
import marcas from "../../../utils/marcas.js";

function Item(props) {
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalInativar] = useState(false);
  const { produto, BuscarProdutos } = props;
  const classeInativo = !produto.ativo ? "produto-inativo" : " ";
  const data = `${produto.dataInativacao}`;

  function onCloseModalEditar() {
    setModalEditar(false);
  }

  function onCloseModalInativar() {
    setModalInativar(false);
  }

  return (
    <li className={`list-item ${classeInativo}`}>
      <div className="list-item-content">
        <div className="image-container">
          <img src={produto.thumb} />
        </div>
        <div className="list-item-main-content">
          <div>
            <h2>Nome do Produto</h2>
            <p>{produto.nome}</p>
          </div>

          <div>
            <h2>Marca</h2>
            <p>
              {produto.marca}:{" "}
              {marcas.find((marca) => marca.nome === produto.marca).descricao}
            </p>
          </div>

          <div>
            <h2>Descricao</h2>
            <p className="list-item-decription">{produto.descricao}</p>
          </div>

          {!produto.ativo && (
            <div>
              <h2>Data de inativação</h2>
              <p> {data}</p>
            </div>
          )}
        </div>

        <div className="list-item-botton">
          <Botao texto="Inativar" onClick={() => setModalInativar(true)} />
          <ConfirmacaoInativacao
            title={`Deseja realmente inativar o item ${produto.nome}`}
            onClose={onCloseModalInativar}
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
