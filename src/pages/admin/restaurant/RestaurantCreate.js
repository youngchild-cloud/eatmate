import './restaurantcreate.scss';

import Aside from 'components/admin/Aside';
import PcInput from 'components/common/PcInput';

function RestaurantCreate(props) {
  return (
    <>
      <section className='admin-restaurantcreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <div className='list-top'>
              <h3>맛집 등록</h3>
            </div>

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