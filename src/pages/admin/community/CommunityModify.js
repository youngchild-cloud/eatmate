import axios from 'axios';
import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function CommunityCreate(props) {

  const { bc_no } = useParams();

  const [bcInput, setBcInput] = useState({
    bc_title: '',
    bc_desc: '',
  })

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9070/community/detail/${bc_no}`)
      .then(res => {
        // console.log('서버 응답 값 : ', res.data);
        setBcInput(res.data);
      })
      .catch(err => console.log('조회 오류 : ', err));
  }, [bc_no]);


  const handleChange = (e) => {
    setBcInput({
      ...bcInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9070/community/update/${bc_no}`, {
        bc_title: bcInput.bc_title,
        bc_desc: bcInput.bc_desc,
      })

      alert('게시글이 수정되었습니다.');

      navigate('/admin/board/community')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className='admin-create admin-usercreate'>
        <h2 className="hidden">자유게시판 수정</h2>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="자유게시판 수정" />

            <form onSubmit={handleSubmit}>
              <PcInput type="text" name='bc_title' title='제목' value={bcInput.bc_title} onChange={handleChange} />
              <PcInput type="text" name="bc_desc" title="내용" value={bcInput.bc_desc} onChange={handleChange} />

              <button type="submit">수정 완료</button>
            </form>

          </article>
        </div>
      </section>
    </>
  );
}

export default CommunityCreate;