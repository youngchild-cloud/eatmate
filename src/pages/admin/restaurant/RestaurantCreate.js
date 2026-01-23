import Aside from 'components/admin/Aside';

import PcInput from 'components/admin/PcInput';
import TitleBox from 'components/admin/TitleBox';

function RestaurantCreate(props) {
  return (
    <>
      <section className='admin-create admin-restaurantcreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <TitleBox title="맛집 등록" linkto="/asdfa" btnname="맛집 등록" />

            <form>
              <legend>맛집 등록하기</legend>
              <PcInput type="select" name="cate" title="맛집 카테고리" />
              <PcInput type="input" name="restaurant" title="맛집명" />
              <PcInput type="input" name="info" title="맛집 설명" />
              <strong className="label">맛집 이미지</strong>
              <PcInput type="file" name="img" title="사진" />
              <PcInput type="tel" name="tel" title="전화번호" />
              <PcInput type="text" name="address" title="주소" />

              <button type="submit">등록 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantCreate;