import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import PcInputTextarea from 'components/admin/PcInputTextarea';
import PcInputFile from 'components/admin/PcInputFile';
import TitleBox from 'components/admin/TitleBox';
import { jwtDecode } from 'jwt-decode';
import { useAdminRequireLogin } from 'utils/useAdminRequireLogin';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserCreate(props) {

  useAdminRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동
  const token = localStorage.getItem('adminToken');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('adminToken');
    }
  }


  const [userModify, setUserModify] = useState({
    u_id: '',
    u_pw: '',
    u_nick: '',
    u_desc: '',
  });

  const [profileFile, setProfileFile] = useState(null);
  const { u_no } = useParams()
  const navigate = useNavigate();

  // 기본 유저기본값 나오게
  useEffect(() => {
    axios.get(`http://localhost:9070/mypage/${u_no}`)
      .then(res => {
        setUserModify(prev => ({
          ...prev,
          u_id: res.data.u_id || '',
          u_pw: res.data.u_pw || '',
          u_nick: res.data.u_nick || '',
          u_desc: res.data.u_desc || '',
        }))
      })
      .catch(err => console.log(err));
  }, [u_no])

  //입력한 값 변경
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserModify(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 수정 버튼 클릭시 수정
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('u_nick', userModify.u_nick);
    formData.append('u_desc', userModify.u_desc);

    if (profileFile) {
      formData.append('u_pic', profileFile);
    }

    try {
      await axios.put(`http://localhost:9070/mypage/profile/modify/${u_no}`, formData);

      alert('수정 완료');
      navigate('/admin/user')
    } catch (err) {
      console.log(err);
    }
  }



return (
    <>
      <section className='admin-create admin-usercreate'>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="user" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="회원 정보 수정" />

            <form onSubmit={handleSubmit}>
              <PcInput type='text' name='u_id' title='아이디' readOnly={true} value={userModify.u_id} />

              <PcInput type='password' name='u_pw' title='비밀번호' readOnly={true} value={userModify.u_pw} />

              <PcInputFile
                name="u_pic"
                title="사진"
                maxFiles={1}
                onFilesChange={(files) => setProfileFile(files[0] || null)}
              />

              <PcInput type='text' name='u_nick' title='닉네임' value={userModify.u_nick} onChange={handleChange} />

              <PcInputTextarea name='u_desc' title='내 소개글' SelectInput='(선택)' value={userModify.u_desc} onChange={handleChange} />

              <button type="submit">수정 완료</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default UserCreate;