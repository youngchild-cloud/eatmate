import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './RestaurantList.scss';

import TitleCenter from 'components/common/TitleCenter';
import Search from 'components/review/Search';
import CpRestaurant from 'components/review/CpRestaurant';

const RestaurantList = () => {
  // 맛집 카테고리
  const [addAct, setAddAct] = useState(false);
  const { cate } = useParams();
  const cateMap = {
    cate1: '한식',
    cate2: '일식',
    cate3: '중식',
    cate4: '양식',
    cate5: '분식',
    cate6: '카페',
    cate7: '디저트',
    cate8: '기타',
  };
  const category = cateMap[cate];

  // 필터 act
  const [activeFilter, setActiveFilter] = useState('rating');

  const handleClick = (filter) => {
    setAddAct(false);

    setActiveFilter(filter);
  };

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
            <h3 className="review-title">{category}</h3>
            <div className={`filter ${addAct ? 'act' : ''}`}> {/* act */}
              <p className='filter-tit' onClick={() => setAddAct(prev => !prev)}>
                <button>
                  {
                    activeFilter === 'rating' ?
                      '평점순' :
                      (activeFilter === 'review' ? '리뷰순' : '이름순')
                  }
                </button>
              </p>
              <ul className="filter-list">
                <li
                  className={activeFilter === 'rating' ? 'act' : ''}
                  onClick={() => handleClick('rating')}
                >
                  <button>평점순</button>
                </li>

                <li
                  className={activeFilter === 'review' ? 'act' : ''}
                  onClick={() => handleClick('review')}
                >
                  <button>리뷰순</button>
                </li>

                <li
                  className={activeFilter === 'name' ? 'act' : ''}
                  onClick={() => handleClick('name')}
                >
                  <button>이름순</button>
                </li>
              </ul>
            </div>
          </div>

          <CpRestaurant category={category} filter={activeFilter} />
        </div>
      </section>
    </>
  );
};

export default RestaurantList;