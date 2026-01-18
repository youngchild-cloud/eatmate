import React from 'react';
import './TitleCenter.scss'
import iconBack from '../../assets/images/icon_back.png';
import { useNavigate } from 'react-router-dom';

const TitleCenter = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className='common-title-box common-title-box-center'>
      <h2 className="common-title">{title}</h2>
      <button className='common-back' onClick={() => navigate(-1)}>
        <img src={iconBack} alt="뒤로 가기" />
        <span className="blind">뒤로 가기</span>
      </button>
    </div>
  );
};

export default TitleCenter;