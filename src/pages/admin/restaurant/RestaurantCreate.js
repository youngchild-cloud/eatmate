import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './RestaurantCreate.scss';

import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import { jwtDecode } from 'jwt-decode';
import { useAdminRequireLogin } from 'utils/useAdminRequireLogin';

function RestaurantCreate(props) {
  useAdminRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동
  const token = localStorage.getItem('adminToken');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('adminToken');
    }
  }

  const [rtInput, setRtInput] = useState({
    rt_name: '',
    rt_desc: '',
    rt_cate: '',
    rt_location: '',
    rt_tel: '',
  });
  const [picFile, setPicFile] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRtInput({
      ...rtInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!picFile) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('rt_name', rtInput.rt_name);
    formData.append('rt_desc', rtInput.rt_desc);
    formData.append('rt_cate', rtInput.rt_cate);
    formData.append('rt_location', rtInput.rt_location);
    formData.append('rt_tel', rtInput.rt_tel);

    if (picFile) formData.append('rt_img', picFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.post('http://localhost:9070/admin/restaurant', formData);

      alert('맛집 등록이 완료되었습니다. 맛집 목록 페이지로 이동합니다.');
      navigate('/admin/restaurant');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <>
      <section className='admin-create admin-restaurant-create'>
        <h2 className='hidden'>맛집 등록</h2>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="맛집 등록" />

            <form onSubmit={handleSubmit}>


              <div className="pc-input-box">
                <label htmlFor="rt_cate">맛집 카테고리</label>
                <select name="rt_cate" id="rt_cate" value={rtInput.rt_cate} onChange={handleChange} required>
                  <option value="">맛집 카테고리를 선택해주세요</option>
                  <option value="한식">한식</option>
                  <option value="일식">일식</option>
                  <option value="중식">중식</option>
                  <option value="양식">양식</option>
                  <option value="분식">분식</option>
                  <option value="카페">카페</option>
                  <option value="디저트">디저트</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <PcInput type="text" name="rt_name" title="맛집명" value={rtInput.rt_name} onChange={handleChange} />

              <PcInput type="text" name="rt_desc" title="맛집 설명" value={rtInput.rt_desc} onChange={handleChange} />

              <PcInputFile
                name="rt_img"
                title="사진"
                maxFiles={1}
                onFilesChange={(files) => setPicFile(files[0] || null)}
              />

              <PcInput type="tel" name="rt_tel" title="전화번호" value={rtInput.rt_tel} onChange={handleChange} />

              <PcInput type="text" name="rt_location" title="주소" value={rtInput.rt_location} onChange={handleChange} />

              <button type="submit">등록 완료</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default RestaurantCreate;