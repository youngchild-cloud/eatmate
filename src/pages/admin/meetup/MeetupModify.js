import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Aside from 'components/admin/Aside';
import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import PcInputTextarea from 'components/admin/PcInputTextarea';
import TitleBox from 'components/admin/TitleBox';

function MeetupCreate(props) {
  const [meetupData, setMeetupData] = useState({
    bm_m_res: '',
    bm_title: '',
    bm_desc: '',
    bm_m_date: '',
    bm_m_people_all: '',
  })
  const [picFile, setPicFile] = useState(null);
  const [originPic, setOriginPic] = useState(null);
  const { bm_no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9070/admin/meetup/modify/${bm_no}`)
      .then(res => {
        setMeetupData(res.data)
        setOriginPic(res.data.bm_img);
      })
      .catch(err => console.log(err))
  }, [bm_no])

  const handleChange = (e) => {
    setMeetupData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originPic) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('bm_no', bm_no);
    formData.append('bm_m_res', meetupData.bm_m_res);
    formData.append('bm_title', meetupData.bm_title);
    formData.append('bm_desc', meetupData.bm_desc);
    formData.append('bm_m_date', meetupData.bm_m_date);
    formData.append('bm_m_people_all', meetupData.bm_m_people_all);
    if (picFile) formData.append('bm_img', picFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.put(`http://localhost:9070/meetup/update/${bm_no}`, formData);

      alert('맛집 탐방 정보가 수정되었습니다. 맛집 탐방 목록 페이지로 이동합니다.');
      navigate('/admin/board/meetup');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className='admin-create admin-usercreate'>
        <div className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="board" />

          {/* 우측 리스트 */}
          <article className='right-content'>
            <TitleBox title="맛집 탐방 수정" />

            <form onSubmit={handleSubmit}>
              <PcInput
                type='text'
                name='bm_m_res'
                title='맛집명'
                value={meetupData.bm_m_res}
                onChange={handleChange}
              />

              <PcInputFile
                name="bm_img"
                title="사진"
                maxFiles={1}
                defaultPreview={originPic}
                previewBasePath="/uploads/meetup"
                onFilesChange={(files) => setPicFile(files[0] || null)}
              />

              <PcInput
                type='text'
                name='bm_title'
                title='제목'
                value={meetupData.bm_title}
                onChange={handleChange}
              />

              <PcInputTextarea
                name='bm_desc'
                title='내용'
                value={meetupData.bm_desc}
                onChange={handleChange}
              />

              <PcInput
                type='date'
                name='bm_m_date'
                title='날짜'
                value={meetupData.bm_m_date}
                onChange={handleChange}
              />

              <PcInput
                type='number'
                name='bm_m_people_all'
                title='참석인원'
                value={meetupData.bm_m_people_all}
                onChange={handleChange}
              />

              <button type="submit">수정 완료</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default MeetupCreate;