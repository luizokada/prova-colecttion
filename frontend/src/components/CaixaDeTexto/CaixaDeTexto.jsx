import React from 'react';
import './style.css'
function CaixaDeTexto(props) {
    const { label, value, onChange, placeholder, required, id, name } = props
    return (
        <div className='caixa-de-texto--root'>
            <label
                className='caixa-de-texto--label'
                htmlFor={id}>{label}</label>
            <input
                className='caixa-de-texto--input'
                id={id}
                name={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}

export default CaixaDeTexto;