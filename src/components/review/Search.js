import './Search.scss';

const Search = () => {
  return (
    <form className="review-search-box">
      <input type="search" name="search" id="search" placeholder='맛집명을 검색하세요' />
      <button><span className="blind">검색</span></button>
    </form>
  );
};

export default Search;