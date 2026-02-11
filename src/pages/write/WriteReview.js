import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useParams } from 'react-router-dom';

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
  const [originPic, setOriginPic] = useState(null);
  const [rtData, setRtData] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const brRtName = useRef();
  const { br_no } = useParams();
  const navigate = useNavigate();

  // br_no이 있는 경우(=== 수정 버튼을 누르고 들어온 경우)
  useEffect(() => {
    if (!br_no) return;

    axios.get(`http://localhost:9070/write/review/modify/${br_no}`)
      .then(res => {
        setReviewInput(prev => ({
          ...prev,
          br_user_no: decoded.token_no,
          br_rank: res.data.br_rank,
          br_desc: res.data.br_desc,
          br_rt_no: res.data.br_rt_no,
          br_rt_name: res.data.rt_name,
        }))
        setOriginPic(res.data.br_img);
      })
      .catch(err => console.log(err.response.data.message));
  }, [br_no]);

  // 맛집명 검색 기능 - 입력한 키워드로 맛집 목록 조회
  const rtSearch = async (word) => {
    if (!word) return;

    try {
      const res = await axios.post('http://localhost:9070/restaurant/search', { word });

      setRtData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  // 맛집명 검색 기능 - 맛집 선택 시 실행
  const rtSelect = (rtNo, rtName) => {
    setReviewInput(prev => ({
      ...prev,
      br_rt_no: rtNo,
      br_rt_name: rtName,
    }))
    setShowSelect(false);
  }

  // input값 변경
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

  // 폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reviewInput.br_rt_no) {
      alert('맛집을 선택해주세요.');
      brRtName.current.focus();
      return;
    }

    if (!br_no && !imgFile) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('br_user_no', reviewInput.br_user_no);
    formData.append('br_rank', reviewInput.br_rank);
    formData.append('br_desc', reviewInput.br_desc);
    formData.append('br_rt_no', reviewInput.br_rt_no);

    if (imgFile) formData.append('br_img', imgFile); // key 이름 중요(백엔드와 동일)

    try {
      if (!br_no) {
        // 등록하기
        const res = await axios.post('http://localhost:9070/write/review', formData);
        alert('맛집 리뷰 글쓰기가 완료되었습니다. 작성한 게시글로 이동합니다.');
        navigate(`/review/detail/${res.data.br_no}`);
      } else {
        // 수정하기
        await axios.put(`http://localhost:9070/write/review/modify/${br_no}`, formData);
        alert('맛집 리뷰 글쓰기 수정이 완료되었습니다. 수정한 게시글로 이동합니다.');
        navigate(`/review/detail/${br_no}`);
      }
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
              ref={brRtName}
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
            maxFiles={1}
            defaultPreview={originPic}
            imgUrl='review'
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
            text={br_no ? '수정하기' : '등록하기'}
          />
        </form>
      </div>
    </section>
  );
};

export default WriteReview;