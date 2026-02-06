import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import PcInputTextarea from 'components/admin/PcInputTextarea';
import TitleBox from 'components/admin/TitleBox';

function MeetupCreate(props) {
  return (
    <>
      <section className='admin-create admin-usercreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <TitleBox title="맛집 탐방 등록" />

            <form>
              <PcInput type='text' name='' title='맛집명' />

              <PcInputFile
                name=""
                title="사진"
                maxFiles={1}
              // onFilesChange={(files) => setProfileFile(files[0] || null)}
              />

              <PcInput type='text' name='' title='제목' />

              <PcInputTextarea name='' title='내용' />

              <PcInput type='date' name='' title='날짜' />

              <PcInput type='number' name='' title='참석인원' />

              <button type="submit">수정 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default MeetupCreate;