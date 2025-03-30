import React from "react";
import '../components/styles/Input.css';
import '../components/styles/Style.css';
export const Textarea = ({ label, id, onChange,rows,value ,name}) => {
  return (
    <div className="input-container">
      <textarea style={{fontWeight:"bold",fontStyle:"Satoshi"}}
        className=""
        id={id}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=""
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};