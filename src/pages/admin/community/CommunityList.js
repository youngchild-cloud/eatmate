import axios from 'axios';
import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat2 } from 'utils/dateFormat2';

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

  const deleteData = async (bc_no, u_nick) => {
    if (window.confirm(`${u_nick}님의 게시물을 삭제하시겠습니까?`)) {
      try {
        await axios
          .delete(`http://localhost:9070/admin/community/${bc_no}`);

        alert(`선택하신 ${u_nick}님의 게시글을 삭제했습니다.`);
        loadData();
      } catch (err) {
        console.log(err)
      }
    }
  }


  return (
    <>
      <section className='admin-list admin-userlist'>
        <h2 className='hidden'>자유게시판 목록</h2>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <article className='admin-list'>
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
                    <td>{ dateFormat2(item.bc_date)}</td>
                    <td className='btn-td'>
                      <Link to={`/admin/board/community/modify/${item.bc_no}`} className='btn-update btn'>수정</Link>
                      <button className='btn-delete btn' onClick={() => deleteData(item.bc_no, item.u_nick)}>삭제</button>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </article>
        </div>
      </section>
    </>
  );
}

export default CommunityList;