import './restaurantcreate.scss';

import Aside from 'components/admin/Aside';
import PcInput from 'pages/admin/PcInput';

function RestaurantCreate(props) {
  return (
    <>
      <section className='admin-restaurantcreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <div className='list-top'>
              <h3>맛집 등록</h3>
            </div>

            <form>
              <legend>맛집 등록하기</legend>
              <PcInput type="select" name="cate" title="맛집 카테고리" />
              <PcInput type="input" name="restaurant" title="맛집명" />
              <PcInput type="input" name="restaurant" title="맛집 설명" />
              <PcInput type="file" name="image" title="맛집 이미지" />
              <PcInput type="tel" name="tel" title="전화번호" />
              <PcInput type="text" name="address" title="주소" />
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantCreate;