import './ButtonWide.scss';

const ButtonWide = ({ type, text, disabled = false }) => {
  return (
    <button type={type} className='btn-wide' disabled={disabled}>{text}</button>
  );
};

export default ButtonWide;