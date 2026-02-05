import axios from 'axios';
import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';

function ReviewList(props) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get('http://localhost:9070/review/all');
      setData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
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
            <TitleBox title="맛집 리뷰 목록" />

            <table>
              <caption>맛집 리뷰 목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "28%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>글쓴이</th>
                  <th>리뷰 본문글</th>
                  <th>대표 이미지</th>
                  <th>맛집명</th>
                  <th>평점</th>
                  <th>하트 수</th>
                  <th>댓글 수</th>
                  <th>등록 날짜/시간</th>
                  <th>수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(item => (
                    <tr key={item.br_no}>
                      <td>{item.br_no}</td>
                      <td>{item.u_nick}</td>
                      <td>{item.br_desc}</td>
                      <td className='imgtd'><img src={`http://localhost:9070/uploads/review/${item.br_img}`} alt="식당 사진"></img></td>
                      <td>{item.rt_name}</td>
                      <td>{item.br_rank}</td>
                      <td>{item.br_heart}</td>
                      <td>{item.br_comment}</td>
                      <td>{item.br_date}</td>
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

export default ReviewList;