import React from 'react';
import { useState, useEffect } from 'react';
import Item from "./Item/Item.jsx"
import api from "../../services/api.js";

function Lista(props) {

    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        api
            .get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    console.log(produtos)
    return (
        <aside >
            <h2>Lista de Produtos </h2>
            <ul>
                {produtos.map((item, index) => (
                    <Item
                        produto={item}
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;