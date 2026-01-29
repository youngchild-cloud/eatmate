import './Badge.scss';

const Badge = ({ rank }) => {
  return (
    rank !== 'normal' && (
      <span className={`badge badge-${rank}`}>{rank}</span>
    )
  );
};

export default Badge;