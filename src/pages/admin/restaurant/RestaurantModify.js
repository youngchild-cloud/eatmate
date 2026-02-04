import axios from 'axios';
import Aside from 'components/admin/Aside';

import PcInput from 'components/admin/PcInput';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RestaurantCreate(props) {

  // const { rt_no } = useParams();

  const [rtInput, setRtInput] = useState({
    // rt_no: '',맛집 번호
    rt_cate: '',
    rt_name: '',
    rt_desc: '',
    rt_img: '',
    rt_img2: '',
    rt_img3: '',
    rt_img4: '',
    rt_img5: '',
    rt_tel: '',
    rt_location: '',
    // rt_rank: '',별점 평균
    // rt_review: '',리뷰 수
    // rt_map: '', 길찾기
    // rt_data: '', 등록날짜
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`http://localhost:9070/goods/${g_code}`)
  //   .then(res =>{
  //     console.log('서버 응답 값 : ', res.data);

  //     if(Array.isArray(res.data))
  //   })

  // })

  const handleChange = (e) => {
    setRtInput({
      ...rtInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9070/restaurant/input', rtInput);

      alert('맛집 등록이 완료되었습니다. 맛집 목록 페이지로 이동합니다.');
      navigate('/admin/restaurant');
    } catch (err) {
      console.log(err.response.data.error);
    }
  }


  return (
    <>
      <section className='admin-create admin-restaurantcreate'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='right-content'>
            <TitleBox title="맛집 등록" />

            <form onSubmit={handleSubmit}>
              <legend>맛집 등록하기</legend>
              <PcInput type="select" name="rt_cate" title="맛집 카테고리" onChange={handleChange} />
              <PcInput type="input" name="rt_name" title="맛집명" onChange={handleChange} />
              <PcInput type="input" name="rt_desc" title="맛집 설명" onChange={handleChange} />
              <strong className="label">맛집 이미지</strong>
              <PcInput type="file" name="rt_img" title="사진" onChange={handleChange} />
              <PcInput type="tel" name="rt_tel" title="전화번호" onChange={handleChange} />
              <PcInput type="text" name="rt_location" title="주소" onChange={handleChange} />

              <button type="submit">수정 완료</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantCreate;