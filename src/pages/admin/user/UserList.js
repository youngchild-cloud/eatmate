import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';

function UserList(props) {
  return (
    <>
      <section className='admin-list admin-userlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="user" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="회원 목록" linkto="/admin/user/create" btnname="회원 등록" btnshow />

            <table>
              <caption>회원 목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "8%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>아이디</th>
                  <th>닉네임</th>
                  <th>내 소개글</th>
                  <th>프로필 이미지</th>
                  <th>뱃지</th>
                  <th>등록 날짜/시간</th>
                  <th>수정 및 삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* 함수자리 */}
                <tr>
                  <td>12312</td>
                  <td>kdt190000</td>
                  <td>피노키오</td>
                  <td>알라라라라라라라라라라라</td>
                  <td>맛집 이미지(사진)</td>
                  <td>normal</td>
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

export default UserList;