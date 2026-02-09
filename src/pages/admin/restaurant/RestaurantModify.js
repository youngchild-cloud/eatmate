import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './RestaurantCreate.scss';

import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';

function RestaurantModify(props) {
  const [rtInput, setRtInput] = useState({
    rt_no: '',
    rt_name: '',
    rt_desc: '',
    rt_cate: '',
    rt_location: '',
    rt_tel: '',
  });
  const [picFile, setPicFile] = useState(null);
  const [originPic, setOriginPic] = useState(null);
  const { rt_no } = useParams();

  const navigate = useNavigate();

  // 페이지에 들어왔을 때 기존 유저값이 나오게
  useEffect(() => {
    axios.get(`http://localhost:9070/admin/restaurant/${rt_no}`)
      .then(res => {
        setRtInput(prev => ({
          ...prev,
          rt_name: res.data.rt_name,
          rt_desc: res.data.rt_desc,
          rt_cate: res.data.rt_cate,
          rt_location: res.data.rt_location,
          rt_tel: res.data.rt_tel,
        }))

        setOriginPic(res.data.rt_img);
      })
      .catch(err => console.log(err))
  }, [rt_no])

  const handleChange = (e) => {
    setRtInput({
      ...rtInput,
      [e.target.name]: e.target.value
    });
  }

  // submit 버튼 클릭시 맛집 수정이 되도록
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originPic) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('rt_no', rt_no);
    formData.append('rt_name', rtInput.rt_name);
    formData.append('rt_desc', rtInput.rt_desc);
    formData.append('rt_cate', rtInput.rt_cate);
    formData.append('rt_location', rtInput.rt_location);
    formData.append('rt_tel', rtInput.rt_tel);

    if (picFile) formData.append('rt_img', picFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.put('http://localhost:9070/admin/restaurant', formData);

      alert('맛집 수정이 완료되었습니다. 맛집 목록 페이지로 이동합니다.');
      navigate('/admin/restaurant');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <>
      <section className='admin-create admin-restaurant-create'>
        <h2 className='hidden'>맛집 수정</h2>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <TitleBox title="맛집 수정" />

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
                defaultPreview={originPic}
                previewBasePath="/uploads/restaurant"
                onFilesChange={(files) => setPicFile(files[0] || null)}
              />

              <PcInput type="tel" name="rt_tel" title="전화번호" value={rtInput.rt_tel} onChange={handleChange} />

              <PcInput type="text" name="rt_location" title="주소" value={rtInput.rt_location} onChange={handleChange} />

              <button type="submit">등록 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantModify;