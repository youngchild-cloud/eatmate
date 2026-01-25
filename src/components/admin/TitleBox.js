import React from 'react';
import { Link } from 'react-router-dom';

import "./titlebox.scss";

function TitleBox({ title, linkto = '', btnname = '', btnshow = false }) {
  return (
    <>
      <div className='list-top'>
        <h3>{title}</h3>
        {
          btnshow &&
          <Link to={linkto} title={`${btnname} 페이지로 이동`} >{btnname}</Link>
        }
      </div>
    </>
  );
}

export default TitleBox;