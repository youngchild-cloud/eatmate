import { Link } from 'react-router-dom';
import './CpRestaurant.scss'

const CpRestaurant = () => {
  return (
    <>
      <ul id='comp-restaurant'>
        <li>
          <Link to={'/review/restaurant/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="맛집" />
            </div>
            <div className="txt-box">
              <h4 className="tit">더 페어링</h4>
              <p><span className='rank'>4.3 (31)</span> · <span className='location'>잠실</span></p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/restaurant/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="맛집" />
            </div>
            <div className="txt-box">
              <h4 className="tit">더 페어링</h4>
              <p><span className='rank'>4.3 (31)</span> · <span className='location'>잠실</span></p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/restaurant/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="맛집" />
            </div>
            <div className="txt-box">
              <h4 className="tit">더 페어링</h4>
              <p><span className='rank'>4.3 (31)</span> · <span className='location'>잠실</span></p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CpRestaurant;