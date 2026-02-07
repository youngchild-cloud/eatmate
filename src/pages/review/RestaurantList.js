import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './RestaurantList.scss';

import TitleCenter from 'components/common/TitleCenter';
// import Search from 'components/review/Search';
import CpRestaurant from 'components/review/CpRestaurant';

const RestaurantList = () => {
  // 검색
  const [formSearch, setFormSearch] = useState(''); // 검색 입력값
  const [searchKeyword, setSearchKeyword] = useState(''); // 실제 검색에 사용되는 키워드

  const handleChange = (e) => {
    setFormSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchKeyword(formSearch);
  }

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

          {/* <Search /> */}
          <form className="review-search-box" onSubmit={handleSubmit}>
            <input type="search" name="rt_search" id="rt_search" placeholder='맛집명을 검색하세요' value={formSearch} onChange={handleChange} />
            <button><span className="blind">검색</span></button>
          </form>
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

          <CpRestaurant category={category} filter={activeFilter} searchKeyword={searchKeyword} />
        </div>
      </section>
    </>
  );
};

export default RestaurantList;