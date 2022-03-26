import React from "react";
import { useState, useEffect } from "react";
import Botao from "../../Botao/Botao";
import "./style.css";
import api from "../../../services/api.js";
import CaixaDeTexto from "../../CaixaDeTexto/CaixaDeTexto";
import AreaDeTexto from "../../AreaDeTexto/CaixaDeTexto";
import CaixaDeSelecao from "../../CaixaDeSelecao/CaixaDeSelecao";

const DEFAUT_PRODUTO = {
  nome: "",
  marca: "",
  descricao: "",
  thumb: "",
  ativo: true,
};

function Form(props) {
  const marcas = [" ", "Portobello", "Portinari", "Deita", "Decotiles"];

  const [produto, setProduto] = useState(DEFAUT_PRODUTO);

  function onChangeHandler(evento) {
    const { value, name } = evento.target;

    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  }
  function adcionarNovoProduto(evento) {
    evento.preventDefault();
    api
      .post("/produtos", produto)
      .then((response) => {
        setProduto(DEFAUT_PRODUTO);
        props.BuscarProdutos();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
  return (
    <form className="form-cadastro-container" onSubmit={adcionarNovoProduto}>
      <CaixaDeTexto
        label="Nome do Produto"
        placeholder="Ex: Piso"
        value={produto.nome}
        type="text"
        name="nome"
        id="nome-do-produto"
        onChange={onChangeHandler}
        required={true}
      />

      <AreaDeTexto
        label="Descrição do Produto"
        placeholder="Ex: Beats é a nova batida! Tradução de como a vida pode ser mais leve e criativa."
        name="descricao"
        id="descricao"
        onChange={onChangeHandler}
        value={produto.descricao}
        required={true}
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
        label="Link da Imagem do produto"
        placeholder="Ex: https://minha.com/imagem.jpg"
        type="text"
        id="link-imagem"
        name="thumb"
        onChange={onChangeHandler}
        value={produto.thumb}
        required
        className="inputTexto"
      />
      <Botao texto="Cadastrar" />
    </form>
  );
}
export default Form;
