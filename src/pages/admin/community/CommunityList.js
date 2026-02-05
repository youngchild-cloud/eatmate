import axios from 'axios';
import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';

function CommunityList(props) {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get('http://localhost:9070/communitylist')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <section className='admin-list admin-userlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="자유게시판 목록" />

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
                {data.map(item => (
                  <tr key={item.bc_no}>
                    <td>{item.bc_no}</td>
                    <td>{item.u_nick}</td>
                    <td>{item.bc_title}</td>
                    <td>{item.bc_desc}</td>
                    <td>{item.bc_heart}</td>
                    <td>{item.bc_comment}</td>
                    <td>{item.bc_date}</td>
                    <td className='btn-td'>
                      <button className='btn-update'>수정</button>
                      <button className='btn-delete'>삭제</button>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
}

export default CommunityList;