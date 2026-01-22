import TitleCenter from 'components/common/TitleCenter';
import MypageTab from 'components/mypage/MypageTab';

const MypageLike = () => {
  return (
    <section className='mypage-tab'>
      <div className="inner">
        <TitleCenter title={'내가 남긴 좋아요'} />

        <MypageTab />
      </div>
    </section>
  );
};

export default MypageLike;