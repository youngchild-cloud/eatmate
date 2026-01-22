import { useState } from 'react';

import './RestaurantList.scss';

import TitleCenter from 'components/common/TitleCenter';
import Search from 'components/review/Search';
import CpRestaurant from 'components/review/CpRestaurant';

const RestaurantList = () => {
  const [addAct, setAddAct] = useState(false);

  return (
    <>
      <section className='review-search'>
        <div className="inner">
          <TitleCenter title={'맛집 보기'} />

          <Search />
        </div>
      </section>

      <section className='restaurant-list'>
        <div className="inner">
          <div className="review-title-box">
            <h3 class="review-title">한식</h3>
            <div className={`filter ${addAct ? 'act' : ''}`}> {/* act */}
              <p className='filter-tit' onClick={() => setAddAct(prev => !prev)}><button>평점순</button></p>
              <ul className='filter-list'>
                <li className='act'><button>평점순</button></li>
                <li><button>리뷰순</button></li>
                <li><button>이름순</button></li>
              </ul>
            </div>
          </div>

          <CpRestaurant />
        </div>
      </section>
    </>
  );
};

export default RestaurantList;