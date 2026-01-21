import { Link } from 'react-router-dom';

import './CpReview.scss';

import Rank5 from '../../components/review/Rank5';

const CpReview = () => {
  return (
    <>
      <ul id="cp-review">
        <li>
          <Link to={'/review/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="txt-box">
              <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
              <p className='name'>더 페어링</p>
              <p className='info'><span>양식</span> · <span>잠실</span> | <sapn>4시간 전</sapn></p>
              <Rank5 num={'5'} />
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="txt-box">
              <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
              <p className='name'>더 페어링</p>
              <p className='info'><span>양식</span> · <span>잠실</span> | <sapn>4시간 전</sapn></p>
              <Rank5 num={'4'} />
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="txt-box">
              <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
              <p className='name'>더 페어링</p>
              <p className='info'><span>양식</span> · <span>잠실</span> | <sapn>4시간 전</sapn></p>
              <Rank5 num={'3'} />
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="txt-box">
              <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
              <p className='name'>더 페어링</p>
              <p className='info'><span>양식</span> · <span>잠실</span> | <sapn>4시간 전</sapn></p>
              <Rank5 num={'2'} />
            </div>
          </Link>
        </li>
        <li>
          <Link to={'/review/detail'}>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="txt-box">
              <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
              <p className='name'>더 페어링</p>
              <p className='info'><span>양식</span> · <span>잠실</span> | <sapn>4시간 전</sapn></p>
              <Rank5 num={'1'} />
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CpReview;