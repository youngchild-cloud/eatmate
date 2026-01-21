import { Link } from 'react-router-dom';

import './CpMeetup.scss';

import HeartComment from '../../components/common/HeartComment';
import tabTxtImg1 from '../../assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from '../../assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from '../../assets/images/meetup/con-txt-img3.png';

const CpMeetup = () => {
  return (
    <>
      <div id="cp-meetup">
        <Link to='/meetup/detail'>
          <div className='item'>
            <div className='item-txt'>
              <h3>피자 같이 먹으러 갈 사람!</h3>
              <p>
                <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
              </p>
              <HeartComment heart={'10'} comment={'10'} />
            </div>
            <div className='item-img'>
              <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
            </div>
          </div>
        </Link>
        <Link to='/meetup/detail'>
          <div className='item'>
            <div className='item-txt'>
              <h3>피자 같이 먹으러 갈 사람!</h3>
              <p>
                <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
              </p>
              <HeartComment heart={'10'} comment={'10'} />
            </div>
            <div className='item-img'>
              <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
            </div>
          </div>
        </Link>
        <Link to='/meetup/detail'>
          <div className='item'>
            <div className='item-txt'>
              <h3>피자 같이 먹으러 갈 사람!</h3>
              <p>
                <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
              </p>
              <HeartComment heart={'10'} comment={'10'} />
            </div>
            <div className='item-img'>
              <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
            </div>
          </div>
        </Link>
        <Link to='/meetup/detail'>
          <div className='item'>
            <div className='item-txt'>
              <h3>피자 같이 먹으러 갈 사람!</h3>
              <p>
                <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
              </p>
              <HeartComment heart={'10'} comment={'10'} />
            </div>
            <div className='item-img'>
              <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
            </div>
          </div>
        </Link>
        <Link to='/meetup/detail'>
          <div className='item'>
            <div className='item-txt'>
              <h3>피자 같이 먹으러 갈 사람!</h3>
              <p>
                <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
              </p>
              <HeartComment heart={'10'} comment={'10'} />
            </div>
            <div className='item-img'>
              <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CpMeetup;