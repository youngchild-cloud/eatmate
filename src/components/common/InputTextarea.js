import './Input.scss';

const InputTextarea = ({ name, title, requiredReq, requiredSel, onChange }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>
        {requiredReq ? <span className='req'>{requiredReq}</span> : ''}
        {requiredSel ? <span className='sel'>{requiredSel}</span> : ''}
        {title}
      </label>
      <textarea
        name={name}
        id={name}
        cols={10}
        rows={5}
        placeholder={`${title}을(를) 입력해 주세요.`}
        onChange={onChange}
        required={requiredSel ? false : true}
      ></textarea>
    </div>
  );
};

export default InputTextarea;