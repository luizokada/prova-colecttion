import React from "react";
import "./style.css";

function CaixaDeSelecao(props) {
  const { label, value, onChange, required, id, name, options } = props;
  return (
    <div className="caixa-de-selecao--root">
      <label className="caixa-de-selecao--label" htmlFor={id}>
        {label}
      </label>
      <select
        className="caixa-de-selecao--select"
        name={name}
        id={id}
        onChange={onChange}
        required={required}
        value={value}
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CaixaDeSelecao;
