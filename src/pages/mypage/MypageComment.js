import TitleCenter from 'components/common/TitleCenter';
import MypageTab from 'components/mypage/MypageTab';

const MypageComment = () => {
  return (
    <section className='mypage-tab'>
      <div className="inner">
        <TitleCenter title={'내가 남긴 댓글'} />

        <MypageTab />
      </div>
    </section>
  );
};

export default MypageComment;