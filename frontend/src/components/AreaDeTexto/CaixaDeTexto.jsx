import React from "react";
import "./style.css";
function AreaDeTexto(props) {
  const { label, value, onChange, placeholder, required, id, name, read } =
    props;
  return (
    <div className="area-de-texto--root">
      <label className="area-de-texto--label" htmlFor={id}>
        {label}
      </label>
      <textarea
        rows={4}
        className="area-de-texto--input"
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={read}
      />
    </div>
  );
}

export default AreaDeTexto;
