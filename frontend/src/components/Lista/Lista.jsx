import React from "react";
import Item from "./Item/Item.jsx";
import "./style.css";

function Lista(props) {
  return (
    <div className="list-container">
      <h1>Lista de Produtos </h1>
      <ul className="list-content">
        {props.produtos.map((item, index) => (
          <Item
            produto={item}
            BuscarProdutos={props.BuscarProdutos}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default Lista;
