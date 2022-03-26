import React, { useState } from "react";
import Botao from "../../Botao/Botao.jsx";
import "./style.css";
import CaixaDeTexto from "../../CaixaDeTexto/CaixaDeTexto.jsx";

function FormBusca(props) {
  const [nome, setNome] = useState("");

  function busca(evento) {
    evento.preventDefault();
    props.BuscarPorNome(nome);
    setNome("");
  }
  return (
    <div className="form-content">
      <form onSubmit={busca} className="form-busca-container">
        <CaixaDeTexto
          label="Digite o nome do Produto que deseja buscar"
          name="Barra-de-Busca"
          type="text"
          value={nome}
          onChange={(evento) => {
            setNome(evento.target.value);
          }}
        />
        <button className="form-busca-button">
          <svg
            fill="currentColor"
            width="20px"
            height="20px"
            viewBox="0 0 50 50"
          >
            <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
          </svg>
        </button>
      </form>
      <Botao texto="Início" onClick={() => props.BuscarProdutos()} />
    </div>
  );
}

export default FormBusca;
