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
              <caption>자유게시판 목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "42%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>글쓴이</th>
                  <th>자유게시판 글제목</th>
                  <th>자유게시판 본문글</th>
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

export default CommunityList;