import React from 'react';
import "./style.css"


function Botao(props) {

    const { texto, onClick } = props

    return (
        <button className='botao--button' onClick={onClick}>{texto}</button>
    );

}

export default Botao