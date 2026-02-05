import TitleCenter from 'components/common/TitleCenter';
import MypageTab from 'components/mypage/MypageTab';
import { useRequireLogin } from 'utils/useRequireLogin';

const MypageComment = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  return (
    <section className='mypage-tab'>
      <div className="inner">
        <TitleCenter title={'내가 남긴 댓글'} />

        <MypageTab category='comment' />
      </div>
    </section>
  );
};

export default MypageComment;