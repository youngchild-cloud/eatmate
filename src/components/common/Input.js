import './Input.scss';

const Input = ({ type, name, title, RequiredInput, SelectInput, readonly, value, onChange, ref, min }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>
        {RequiredInput && <span className='req'>{RequiredInput}</span>}
        {SelectInput && <span className='sel'>{SelectInput}</span>}
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={type === 'date' ? undefined : `${title}을(를) 입력해 주세요.`}
        readOnly={readonly && true}
        value={value}
        onChange={onChange}
        required={SelectInput ? false : true}
        min={type === 'date' ? min : undefined}
        ref={ref}
      />
    </div>
  );
};

export default Input;