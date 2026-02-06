import Aside from 'components/admin/Aside';
import PcInputFile from 'components/admin/PcInputFile';
import PcInputTextarea from 'components/admin/PcInputTextarea';

import TitleBox from 'components/admin/TitleBox';

import './reviewModify.scss';

function ReviewCreate(props) {
  return (
    <>
      <section className='admin-create admin-usercreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <TitleBox title="맛집 리뷰 수정" />

            <form className='review-modify'>
              <legend>맛집 리뷰 수정하기</legend>

              <div className='pc-input-box'>
                <label htmlFor="br_rank">맛집명</label>
                <select required >
                  <option value="">맛집명을 선택해주세요.</option>
                </select>
              </div>

              {/* <strong className="label">맛집 이미지</strong> */}
              <div className="reveiw-box">
                <PcInputFile type="file" name="rt_img" title="사진" />
              </div>

              <PcInputTextarea type="input" name="rt_desc" title="리뷰" />
              <div className='pc-input-box'>
                <label htmlFor="br_rank">평점</label>
                <select required >
                  <option value="">평점을 선택해 주세요</option>
                  <option value="5">5점</option>
                  <option value="4">4점</option>
                  <option value="3">3점</option>
                  <option value="2">2점</option>
                  <option value="1">1점</option>
                </select>
              </div>


              <button type="submit">수정 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default ReviewCreate;