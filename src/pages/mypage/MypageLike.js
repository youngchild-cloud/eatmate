import TitleCenter from 'components/common/TitleCenter';
import MypageTab from 'components/mypage/MypageTab';
import { useRequireLogin } from 'utils/useRequireLogin';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const MypageLike = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }
  return (
    <section className='mypage-tab'>
      <div className="inner">
        <TitleCenter title={'내가 남긴 좋아요'} />

        <MypageTab category='like' />
      </div>
    </section>
  );
};

export default MypageLike;