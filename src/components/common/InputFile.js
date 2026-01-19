import './InputFile.scss';

const InputFile = ({ name, title }) => {
  return (
    <div className='common-input-box common-input-box__file'>
      <strong className='label'>{title}</strong>
      <label htmlFor={name}>사진</label>
      <input type='file' name={name} id={name} placeholder={`${title}을 입력해 주세요.`} />
    </div>
  );
};

export default InputFile;