import React from 'react';
import './pcinput.scss';

function PcInput({ type, name, title, onChange, value }) {
  return (
    <p className="pc-input-box">
      <label htmlFor={name}>{`${title}`}</label>
      <input type={type} id={name} name={name} placeholder={`${title}을(를) 입력해주세요`}
        onChange={onChange} value={value} required />
    </p>
  );
}

export default PcInput;