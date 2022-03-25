import React from 'react';
import { useState, useEffect } from 'react';
import Item from "./Item/Item.jsx"
import api from "../../services/api.js";

function Lista(props) {


    return (
        <aside >
            <h2>Lista de Produtos </h2>
            <ul>
                {props.produtos.map((item, index) => (
                    <Item
                        produto={item}
                        BuscarProdutos={props.BuscarProdutos}
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;