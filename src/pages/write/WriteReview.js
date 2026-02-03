import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import './WriteReview.scss';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';

const WriteReview = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const [reviewInput, setReviewInput] = useState({
    br_user_no: decoded.token_no,
    br_rank: '',
    br_desc: '',
    br_rt_no: '',
    br_rt_name: '',
  });
  const [imgFile, setImgFile] = useState(null);
  const [rtData, setRtData] = useState([]);
  const navigate = useNavigate();
  const [showSelect, setShowSelect] = useState(false);

  const rtSearch = async (word) => {
    if (!word) return;

    try {
      const res = await axios.post('http://localhost:9070/restaurant/search', { word });

      setRtData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'br_rt_name') {
      rtSearch(e.target.value);
      setShowSelect(true);
    }

    setReviewInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const rtSelect = (rtNo, rtName) => {
    setReviewInput(prev => ({
      ...prev,
      br_rt_no: rtNo,
      br_rt_name: rtName,
    }))
    setShowSelect(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('br_user_no', reviewInput.br_user_no);
    formData.append('br_rank', reviewInput.br_rank);
    formData.append('br_desc', reviewInput.br_desc);
    formData.append('br_rt_no', reviewInput.br_rt_no);

    if (imgFile) formData.append('br_img', imgFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.post('http://localhost:9070/write/review', formData);

      alert('맛집 리뷰 글쓰기가 완료되었습니다. 맛집 리뷰 목록 페이지로 이동합니다.');
      navigate('/review');
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  return (
    <section className='write-review'>
      <div className="inner">
        <TitleCenter title='맛집 리뷰 글쓰기' />

        <form className='write-form' onSubmit={handleSubmit}>
          <div className="rt-area">
            <Input
              type='text'
              name='br_rt_name'
              title='맛집명'
              value={reviewInput.br_rt_name}
              onChange={handleChange}
            />

            {
              (rtData && showSelect) &&
              <ul className='rt-list'>
                {
                  rtData.map(item => (
                    <li key={item.rt_no}>
                      <button
                        type='button'
                        onClick={() => rtSelect(item.rt_no, item.rt_name)}
                      >
                        {item.rt_name}
                      </button>
                    </li>
                  ))
                }
              </ul>
            }
          </div>

          <InputFile
            name="br_img"
            title="사진"
            // maxFiles={5}
            onFilesChange={(files) => setImgFile(files[0] || null)}
          />

          <InputTextarea
            name='br_desc'
            title='리뷰'
            value={reviewInput.br_desc}
            onChange={handleChange}
          />

          <div className='common-input-box'>
            <label htmlFor="br_rank">평점</label>
            <select
              name="br_rank"
              id="br_rank"
              value={reviewInput.br_rank}
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

          <ButtonWide
            type='submit'
            text='등록하기'
          />
        </form>
      </div>
    </section>
  );
};

export default WriteReview;