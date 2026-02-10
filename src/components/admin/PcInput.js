import React from 'react';
import './pcinput.scss';

function PcInput({ type, name, title, onChange, value, readOnly }) {
  return (
    <div className="pc-input-box">
      <label htmlFor={name}>{`${title}`}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={type === 'date' ? undefined : `${title}을(를) 입력해 주세요.`}
        value={value}
        onChange={onChange}
        required
        readOnly={readOnly && true}
      />
    </div>
  );
}

export default PcInput;