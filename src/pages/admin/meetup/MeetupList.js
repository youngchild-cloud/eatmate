import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';

function MeetupList(props) {
  return (
    <>
      <section className='admin-list admin-userlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="맛집 탐방 목록" />

            <table>
              <caption>맛집 탐방 목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "8%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>글쓴이</th>
                  <th>탐방 글제목</th>
                  <th>탐방 본문글</th>
                  <th>대표 이미지</th>
                  <th>탐방 맛집명</th>
                  <th>탐방 날짜</th>
                  <th>하트 수</th>
                  <th>댓글 수</th>
                  <th>등록 날짜/시간</th>
                  <th>수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* 함수자리 */}
                <tr>
                  <td>11111</td>
                  <td>오홍식</td>
                  <td>밥친구 찾습니다</td>
                  <td>라라라라라라라라라동대문 엽기떡볶이 종로점</td>
                  <td>맛집 이미지(사진)</td>
                  <td>세상맛있는집</td>
                  <td>2026.01.22</td>
                  <td>100</td>
                  <td>100</td>
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

export default MeetupList;