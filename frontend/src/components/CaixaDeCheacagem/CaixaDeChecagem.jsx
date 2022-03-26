import React from "react";
import "./style.css";

function CaixaDeChecagem(props) {
  const { label, checked, onChange, id, name, read } = props;
  return (
    <div className="caixa-de-checagem--root">
      <label className="caixa-de-checagem--label" htmlFor={id}>
        {label}
      </label>
      <input
        className="caixa-de-checagem--checkbox"
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        type="checkbox"
        readOnly={read}
      />
    </div>
  );
}

export default CaixaDeChecagem;
