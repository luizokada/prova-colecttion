import React from 'react';
import Botao from '../../Botao/Botao';

function Form() {
    return (
        <form>
            <label for='Nome-do-Produto'>Nome do Produto</label>

            <input
                placeholder="Nome do Produto"
                type="text"
                name='Nome-do-Produto'
            />

            <label for="descricao">Descricao do Produto</label>
            <textarea name="descricao"></textarea>
            <label for="marca">Marca</label>
            <select name="marca">
                <option id="Portobello">Portobello</option>
                <option id="Portinari">Portinari</option>
                <option id="Deita">Deita</option>
                <option id="Decotiles">Decotiles</option>
            </select>
            <Botao
                text="Cadastrar" />
        </form>
    )
}
export default Form