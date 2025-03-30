import React from "react";
import '../components/styles/Input.css';
import '../components/styles/Style.css';
export const Input = ({ label, id, onChange,type,value,name }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        style={{fontWeight:"bold"}}
        className=""
        id={id}
        value={value}
        readOnly={id==="file" ? true : false}
        onChange={onChange}
        placeholder=""
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};