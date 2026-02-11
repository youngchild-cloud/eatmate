import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import TitleBox from 'components/admin/TitleBox';
import { jwtDecode } from 'jwt-decode';
import { useAdminRequireLogin } from 'utils/useAdminRequireLogin';

function UserCreate(props) {
  useAdminRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동
  const token = localStorage.getItem('adminToken');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('adminToken');
    }
  }
  return (
    <>
      <section className='admin-create admin-usercreate'>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="user" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="회원 등록" />

            <form>
              <PcInput type='text' name='' title='아이디' />

              <PcInput type='password' name='' title='비밀번호' />

              <PcInput type='password' name='' title='비밀번호 확인' />

              <PcInput type='text' name='' title='이름' />

              <PcInputFile
                name=""
                title="사진"
                maxFiles={1}
              // onFilesChange={(files) => setProfileFile(files[0] || null)}
              />

              <button type="submit">수정 완료</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default UserCreate;