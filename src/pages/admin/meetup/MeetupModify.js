import Aside from 'components/admin/Aside';
import Input from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import InputTextarea from 'components/admin/InputTextarea';
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
            <TitleBox title="맛집 탐방 수정" />

            <form>
              <legend>맛집 탐방 수정</legend>
              <Input type="input" name="restaurant" title="맛집명" />
              {/* <strong className="label">맛집 이미지</strong> */}
              <PcInputFile type="file" name="img" title="사진" />
              <Input type="text" name="title" title="제목" />
              <InputTextarea type="input" name="rt_desc" title="리뷰" />
              <Input type="date" name="date" title="날짜" />
              <Input type="number" name="peo" title="날짜" />

              <button type="submit">등록 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default MeetupCreate;