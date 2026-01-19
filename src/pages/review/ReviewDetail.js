import './ReviewDetail.scss';

import { Link } from 'react-router-dom';

import TitleCenter from '../../components/common/TitleCenter';
import Badge from '../../components/common/Badge';
import Rank5 from '../../components/review/Rank5';
import HeartComment from '../../components/common/HeartComment';
import Chat from '../../components/common/Chat';

const ReviewDetail = () => {
  return (
    <section className='review-detail'>
      <div className="inner">
        <TitleCenter title={'리뷰 보기'} />

        <article className="review-con">
          <div className="profile-area">
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review-profile01.jpg`} alt="프로필" />
            </div>
            <div className="txt-box">
              <strong className='name'>
                고래미
                <Badge rank={'vip'} />
              </strong>
              <p className='rank-date'>
                <Rank5 num={'5'} />
                <span className="date">2026.01.06</span>
              </p>
            </div>
          </div>
          <div className="image-area">
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/review/review01.jpg`} alt="리뷰" />
            </div>
          </div>
          <div className="text-area">
            <p>
              웨이팅이 엄청 났지만 그만큼 맛있겠지! 하고 주변에 보수동 책방골목이랑 깡통시장 구경갔다가 오니 시간이 딱 맞았어요 ㅎㅎ 12시부터 웨이팅 시작해서 두시간 정도 기다렦다가 2시 쫌 넘으니 손님이 쫙 빠지면서 금방 들어갔네오!🙂 날씨가 추우니 앞에 계시지말구 웨이팅 잡아놓으시구 근처 구경거리 많으니 다녀오시는것을 츄천해요! 순서 확인은 항상 꼬옥 필수! ⭐️ <br />
              <br />
              일단 들어가자마자 있던 트리 넘 이쁘고 크리스마스라 매장도 깔끔히 꾸며놓으셨더라구요 🥹🎄주문 결제는 테이블에 앉아서 기계로 해서 편했구요 !  아 ! 서빙은 로봇이 움직이더라구요?! 피자 갖다 주는거 넘 귀욥,, 🤖🍕그리구 탄산음료는 리필은 안되지만 대용량 컵에 주니 리필 없어도 넉넉히 잘 먹었습니다 ㅎㅎ 🥤 물론 피자 맛도 말해뭐해,, 🤤 남자친구는 기다리는거 질색인 사람인데 기다릴만큼 맛있었다며 그릇 싹 비우구 포장까지 해갔다구요 ㅎㅎㅎ   + 아 ! ✴️ 갈릭소스 꼭 !!! 주문하실때 같이 시키세요!!
            </p>

            <Link to={'/review/restaurant/detail'} title='식당 상세보기 페이지로 이동' className='link'>#더 페어링</Link>

            <HeartComment heart={'10'} comment={'10'} />
          </div>
        </article>

        <Chat />
      </div>
    </section>
  );
};

export default ReviewDetail;