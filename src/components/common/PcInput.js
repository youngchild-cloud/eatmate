import React from 'react';

function PcInput({ type, name, title }) {
  return (
    <p>
      <label htmlFor={name}>{`${title}`}</label>
      <input type={type} id={name} name={name} placeholder={`${title}를 입력해주세요`} />
    </p>
  );
}

export default PcInput;