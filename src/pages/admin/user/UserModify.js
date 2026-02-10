import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import TitleBox from 'components/admin/TitleBox';

function UserCreate(props) {
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