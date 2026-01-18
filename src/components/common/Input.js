import './Input.scss';

const Input = ({ name, title, type }) => {
  return (
    <div className='common-input-box'>
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} id={name} placeholder={`${title}을 입력해 주세요.`} />
    </div>
  );
};

export default Input;