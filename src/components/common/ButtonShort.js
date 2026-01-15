import { Link } from 'react-router-dom';
import './ButtonShort.scss';

const ButtonShort = ({ link, linkTitle, text }) => {
  return (
    <Link to={link} title={`${linkTitle} 페이지로 이동`} className='btn-short'>{text}</Link>
  );
};

export default ButtonShort;