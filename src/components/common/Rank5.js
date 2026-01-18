import './Rank5.scss';

const Rank5 = ({ num }) => {
  return (
    <>
      {/* 평점 5점일 경우 rank5 클래스 추가 */}
      <p className={`rank5 rank5-${num}`}>
        <span className="blind">{num}점</span>
      </p>
    </>
  );
};

export default Rank5;