import axios from 'axios';
import Aside from 'components/admin/Aside';

import PcInput from 'components/admin/PcInput';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RestaurantCreate(props) {

  const { rt_no } = useParams();

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

  useEffect(() => {
    axios.get(`http://localhost:9070/restaurant/detail/${rt_no}`)
      .then(res => {
        console.log('서버 응답 값 : ', res.data);
          setRtInput(res.data);
      })
      .catch(err => console.log('조회 오류 : ', err));
  }, [rt_no]);
  console.log(rt_no)

  const handleChange = (e) => {
    setRtInput({
      ...rtInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9070/restaurant/update/${rt_no}`, {
        rt_cate: rtInput.rt_cate,
        rt_name: rtInput.rt_name,
        rt_desc: rtInput.rt_desc,
        rt_img: rtInput.rt_img,
        rt_img2: rtInput.rt_img2,
        rt_img3: rtInput.rt_img3,
        rt_img4: rtInput.rt_img4,
        rt_img5: rtInput.rt_img5,
        rt_tel: rtInput.rt_tel,
        rt_location: rtInput.rt_location,
      })


      alert('맛집 정보가 수정되었습니다.');
      
      navigate('/restaurant')
    } catch (err) {
      console.log(err)
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
              <PcInput type="select" name="rt_cate" title="맛집 카테고리" value={rtInput.rt_name} onChange={handleChange} />
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