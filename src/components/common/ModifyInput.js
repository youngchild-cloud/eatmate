import './Input.scss';

const ModifyInput = ({ type, name, title, RequiredInput, SelectInput, readonly, value, onChange }) => {
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
        placeholder={''}
        readOnly={readonly && true}
        value={value ?? ''}
        onChange={onChange}
        required={SelectInput ? false : true}
      />
    </div>
  );
};

export default ModifyInput;