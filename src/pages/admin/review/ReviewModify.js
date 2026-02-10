import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import PcInputTextarea from 'components/admin/PcInputTextarea';

function ReviewCreate(props) {
  const [reviewData, setReviewData] = useState({
    rt_no: '',
    rt_name: '',
    br_desc: '',
    br_rank: '',
  })
  const [picFile, setPicFile] = useState(null);
  const [originPic, setOriginPic] = useState(null);
  const { br_no } = useParams();
  const navigate = useNavigate();

  // 페이지에 들어왔을 때 기존값이 나오게
  useEffect(() => {
    axios.get(`http://localhost:9070/admin/review/${br_no}`)
      .then(res => {
        setReviewData(prev => ({
          ...prev,
          rt_no: res.data.rt_no,
          rt_name: res.data.rt_name,
          br_desc: res.data.br_desc,
          br_rank: res.data.br_rank,
        }))
        setOriginPic(res.data.br_img);
      })
      .catch(err => console.log(err))
  }, [br_no])

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'rt_no') {
      const rt_no = value;
      axios.get(`http://localhost:9070/admin/restaurant/${rt_no}`)
        .then(res => {
          setReviewData(prev => ({
            ...prev,
            rt_name: res.data || '' ? res.data.rt_name : '(없는 식당 번호입니다. 다른 번호를 입력해주세요.)',
          }))
        })
        .catch(err => console.log(err))
    }

    setReviewData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // submit 버튼 클릭시 맛집 리뷰가 수정
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originPic) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('br_no', br_no);
    formData.append('rt_no', reviewData.rt_no);
    formData.append('br_desc', reviewData.br_desc);
    formData.append('br_rank', reviewData.br_rank);
    if (picFile) formData.append('br_img', picFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.put('http://localhost:9070/admin/review', formData);

      alert('맛집 리뷰 정보가 수정되었습니다. 맛집 리뷰 목록 페이지로 이동합니다.');
      navigate('/admin/board/review');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className='admin-create admin-usercreate'>
        <h2 className='hidden'>맛집 리뷰 수정</h2>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="맛집 리뷰 수정" />

            <form className='review-modify' onSubmit={handleSubmit}>

              <PcInput
                type="number"
                name="rt_no"
                title="맛집번호"
                value={reviewData.rt_no}
                onChange={handleChange}
              />

              <PcInput
                type="text"
                name="rt_name"
                title="맛집명"
                value={reviewData.rt_name}
                onChange={handleChange}
                readOnly
              />

              <PcInputFile
                name="br_img"
                title="사진"
                maxFiles={1}
                defaultPreview={originPic}
                previewBasePath="/uploads/review"
                onFilesChange={(files) => setPicFile(files[0] || null)}
              />

              <PcInputTextarea
                name="br_desc"
                title="리뷰"
                value={reviewData.br_desc}
                onChange={handleChange}
              />

              <div className='pc-input-box'>
                <label htmlFor="br_rank">평점</label>
                <select
                  name='br_rank'
                  id="br_rank"
                  className='br_rank'
                  value={reviewData.br_rank}
                  onChange={handleChange}
                  required
                >
                  <option value="">평점을 선택해 주세요</option>
                  <option value="5">5점</option>
                  <option value="4">4점</option>
                  <option value="3">3점</option>
                  <option value="2">2점</option>
                  <option value="1">1점</option>
                </select>
              </div>

              <button type="submit">수정 완료</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default ReviewCreate;