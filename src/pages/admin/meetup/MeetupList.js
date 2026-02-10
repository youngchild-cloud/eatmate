import axios from 'axios';
import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat2, dateFormat3 } from 'utils/dateFormat2';

function MeetupList(props) {

  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get('http://localhost:9070/meetup/all');
      setData(res.data);
    } catch (err) {
      console.log(err.respone.data.error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = async (bm_no, u_nick) => {
    if (window.confirm(`${u_nick}님의 게시글을 삭제하시겠습니까?`)) {
      try {
        await axios.delete(`http://localhost:9070/admin/meetup/${bm_no}`);

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
        <h2 className='hidden'>맛집 탐방 목록</h2>
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
                {data.map(item => (
                  <tr key={item.bm_no}>
                    <td>{item.bm_no}</td>
                    <td>{item.u_nick}</td>
                    <td>{item.bm_title}</td>
                    <td>{item.bm_desc}</td>
                    <td className='imgtd'><img src={`http://localhost:9070/uploads/meetup/${item.bm_img}`} alt="탐방 사진" ></img></td>
                    <td>{item.bm_m_res}</td>
                    <td>{ dateFormat3(item.bm_m_date)}</td>
                    <td>{item.bm_heart}</td>
                    <td>{item.bm_comment}</td>
                    <td>{ dateFormat2(item.bm_date)}</td>
                    <td className='btn-td'>
                      <Link to={`/admin/board/meetup/modify/${item.bm_no}`} className='btn-update btn'>수정</Link>
                      <button className='btn-delete btn' onClick={() => deleteData(item.bm_no, item.u_nick)}>삭제</button>
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

export default MeetupList;