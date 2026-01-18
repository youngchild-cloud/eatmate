import './Input.scss';

const InputTextarea = ({ name, title }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>{title}</label>
      <textarea name={name} id={name} cols={10} rows={5} placeholder={`${title}을 입력해 주세요.`}></textarea>
    </div>
  );
};

export default InputTextarea;