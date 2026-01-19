import React from 'react';
import './TitleLeft.scss'
import ButtonShort from './TitleLeft/ButtonShort';

const TitleLeft = ({ title, link, linkTitle, text }) => {
  return (
    <div className="common-title-box">
      <h2 className="common-title">{title}</h2>
      <ButtonShort link={link} linkTitle={linkTitle} text={text} />
    </div>
  );
};

export default TitleLeft;