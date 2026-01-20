import './Input.scss';

const Input = ({ type, name, title, requiredReq, requiredSel, readonly }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>
        {requiredReq ? <span className='req'>{requiredReq}</span> : ''}
        {requiredSel ? <span className='sel'>{requiredSel}</span> : ''}
        {title}
      </label>
      <input type={type} name={name} id={name} placeholder={`${title}을(를) 입력해 주세요.`} readOnly={readonly && true} />
    </div>
  );
};

export default Input;