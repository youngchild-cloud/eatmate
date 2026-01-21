import TitleCenter from '../../components/common/TitleCenter';
import MypageTab from '../../components/mypage/MypageTab';

const MypageWrite = () => {
  return (
    <section className='mypage-tab'>
      <div className="inner">
        <TitleCenter title={'작성한 게시글'} />

        <MypageTab />
      </div>
    </section>
  );
};

export default MypageWrite;