import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { Link } from 'react-router-dom';
import { dateFormat2 } from 'utils/dateFormat2';
import { jwtDecode } from 'jwt-decode';
import { useAdminRequireLogin } from 'utils/useAdminRequireLogin';



function UserList(props) {
  useAdminRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동
  const token = localStorage.getItem('adminToken');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('adminToken');
    }
  }

  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get('http://localhost:9070/admin/user')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadData();
  }, []);

  const delData = (u_no) => {
    if (window.confirm('삭제하시겠습니까?')) {
      axios
        .delete(`http://localhost:9070/admin/user/${u_no}`)
        .then(() => {
          alert('삭제되었습니다.')
          loadData();
        })
    }
  }

  return (
    <>
      <section className='admin-list admin-userlist'>
        <h2 className="hidden">회원 목록</h2>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="user" />

          {/* 우측 리스트 */}
          <article className='admin-list'>
            <TitleBox title="회원 목록" />

            <table>
              <caption>회원 목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "35%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "17%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>아이디</th>
                  <th>닉네임</th>
                  <th>내 소개글</th>
                  <th>뱃지</th>
                  <th>등록 날짜/시간</th>
                  <th>수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* 함수자리 */}
                {data.map(item => (
                  <tr key={item.u_no}>
                    <td>{item.u_no}</td>
                    <td>{item.u_id}</td>
                    <td>{item.u_nick}</td>
                    <td>{item.u_desc}</td>
                    <td>{item.u_badge}</td>
                    <td>{dateFormat2(item.u_date)}</td>
                    <td className='btn-td'>
                      <Link to={`/admin/user/modify/${item.u_no}`} className='btn-update btn'>수정</Link>
                      <button className='btn-delete btn' onClick={() => delData(item.u_no)}>삭제</button>
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

export default UserList;