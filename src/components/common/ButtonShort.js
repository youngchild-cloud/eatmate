import './ButtonShort.scss';

const ButtonShort = ({ type, text }) => {
  return (
    <button type={type} className='btn-short'>{text}</button>
  );
};

export default ButtonShort;