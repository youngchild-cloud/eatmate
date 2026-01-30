import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';

function CommunityList(props) {
  return (
    <>
      <section className='admin-list admin-userlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="자유게시판 목록" linkto="/admin/board/community/create" btnname="자유게시판 등록" btnshow />

            <table>
              <caption>맛집목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "4%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>맛집 카테고리</th>
                  <th>맛집명</th>
                  <th>맛집 설명</th>
                  <th>맛집 이미지</th>
                  <th>전화번호</th>
                  <th>주소</th>
                  <th>평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>분식</td>
                  <td>엽기떡볶이 종로</td>
                  <td>한국을 대표하는 떡볶이 중에서...</td>
                  <td>맛집 이미지(사진)</td>
                  <td>02-000-0000</td>
                  <td>서울특별시 중구 다산로 265 럭키프라자 1층</td>
                  <td>4.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
}

export default CommunityList;