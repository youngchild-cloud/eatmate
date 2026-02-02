import './Input.scss';

const InputTextarea = ({ name, title, RequiredInput, SelectInput, onChange }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>
        {RequiredInput ? <span className='req'>{RequiredInput}</span> : ''}
        {SelectInput ? <span className='sel'>{SelectInput}</span> : ''}
        {title}
      </label>
      <textarea
        name={name}
        id={name}
        cols={10}
        rows={5}
        placeholder={`${title}을(를) 입력해 주세요.`}
        onChange={onChange}
        required={SelectInput ? false : true}
      ></textarea>
    </div>
  );
};

export default InputTextarea;