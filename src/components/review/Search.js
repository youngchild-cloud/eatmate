import './Search.scss';

const Search = ({ value, onChange, onSubmit }) => {
  const handleChange = (e) => onChange(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // 부모에게 "검색 실행" 요청
  };

  return (
    <form className="review-search-box" onSubmit={handleSubmit}>
      <input
        type="search"
        name="rt_search"
        id="rt_search"
        placeholder="맛집명을 검색하세요"
        value={value}
        onChange={handleChange}
      />
      <button><span className="blind">검색</span></button>
    </form>
  );
};

export default Search;