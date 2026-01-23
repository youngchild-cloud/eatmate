import React from 'react';
import { Link } from 'react-router-dom';

import "./titlebox.scss";

function TitleBox({ title, linkto, btnname, btnshow }) {
  return (
    <>
      <div className='list-top'>
        <h3>{title}</h3>
        {
          btnshow &&
          <Link to={linkto} title={`${btnname}으로 이동}`} >{btnname}</Link>
        }
      </div>
    </>
  );
}

export default TitleBox;