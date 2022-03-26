import React, { useState } from "react";
import Botao from "../../Botao/Botao";
import api from "../../../services/api";
import CaixaDeTexto from "../../CaixaDeTexto/CaixaDeTexto";
import AreaDeTexto from "../../AreaDeTexto/CaixaDeTexto";
import CaixaDeSelecao from "../../CaixaDeSelecao/CaixaDeSelecao";
import CaixaDeChecagem from "../../CaixaDeCheacagem/CaixaDeChecagem";
import "./style.css";

function FormEdicao(props) {
  const marcas = [" ", "Portobello", "Portinari", "Deita", "Decotiles"];

  const { produtoAntigo, BuscarProdutos, onClose } = props;
  const [produto, setProduto] = useState(produtoAntigo);

  function editarProduto(evento) {
    evento.preventDefault();
    api
      .put(`/produtos/${produto._id}`, produto)
      .then((response) => {
        BuscarProdutos();
        onClose();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function onChangeHandler(evento) {
    const { value, name } = evento.target;

    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  }

  function onChangeHandlerCheckBox(evento) {
    const { checked, name } = evento.target;

    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: checked,
    }));
  }
  return (
    <form onSubmit={editarProduto} className="form-edicao-container">
      <CaixaDeTexto
        label="Nome do Produto"
        placeholder="Nome do Produto"
        value={produto.nome}
        type="text"
        id="nome-produto"
        name="nome"
        onChange={onChangeHandler}
        required
      />

      <AreaDeTexto
        label="Descrição do Produto"
        name="descricao"
        id="descricao-produto"
        onChange={onChangeHandler}
        value={produto.descricao}
        required
      />
      <CaixaDeSelecao
        label="Marca"
        name="marca"
        id="marca"
        options={marcas}
        onChange={onChangeHandler}
        required
        value={produto.marca}
      />

      <CaixaDeTexto
        label="Link da Imagem"
        placeholder="Nome do Produto"
        value={produto.thumb}
        type="text"
        id="nome-produto"
        name="thumb"
        onChange={onChangeHandler}
        required
      />

      <CaixaDeChecagem
        id="Ativo"
        label="Produto ativo"
        checked={produto.ativo}
        name="ativo"
        read={false}
        onChange={onChangeHandlerCheckBox}
      />
      <Botao texto="Editar" />
    </form>
  );
}

export default FormEdicao;
