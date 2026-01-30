import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';

function RestaurantList(props) {
  return (
    <>
      <section className='admin-list admin-restaurantlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="맛집 목록" linkto="/admin/restaurant/create" btnname="맛집 등록" btnshow />

            <table>
              <caption>맛집목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "5%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "8%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "6%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>카테고리</th>
                  <th>맛집명</th>
                  <th>맛집 설명</th>
                  <th>맛집 이미지</th>
                  <th>전화번호</th>
                  <th>위치</th>
                  <th>평점/리뷰수</th>
                  <th>등록 날짜/시간</th>
                  <th>수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* 함수자리 */}
                <tr>
                  <td>1111111</td>
                  <td>분식</td>
                  <td>엽기떡볶이 종로</td>
                  <td>한국을 대표하는 떡볶이 중에서...</td>
                  <td>맛집 이미지(사진)</td>
                  <td>02-000-0000</td>
                  <td>서울특별시 중구 다산로 265 럭키프라자 1층</td>
                  <td>4.9(10)</td>
                  <td>2024.05.01 000000</td>
                  <td className='btn-td'>
                    <button className='btn-update'>수정</button>
                    <button className='btn-delete'>삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantList;