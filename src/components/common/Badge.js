import './Badge.scss';

const Badge = ({ rank }) => {
  return (
    <span className={`bagde bagde-${rank}`}>{rank}</span>
  );
};

export default Badge;