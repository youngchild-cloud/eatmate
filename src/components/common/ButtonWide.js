import './ButtonWide.scss';

const ButtonWide = ({ type, text }) => {
  return (
    <button type={type} className='btn-wide'>{text}</button>
  );
};

export default ButtonWide;