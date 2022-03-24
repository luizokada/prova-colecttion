import React from 'react';

function Item(props) {
    return (
        <li>
            <img src={props.thumb} />
            <p>{props.nome}</p>
            <p>{props.marca}</p>
            <p>{props.descricao}</p>
        </li>
    );
}

export default Item;