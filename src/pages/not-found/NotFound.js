import React from 'react';
import error from '../../assets/images/404error/error.png';

const NotFound = () => {
  return (
    <>
      <section className='page404'>
        <article className="inner">

          <div>
            <img src={error} alt="404error" />
          </div>


        </article>
      </section>

    </>
  );
};

export default NotFound;