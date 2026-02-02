import './Comment.scss';

function Comment({ profil, nick, txt, time }) {
  return (
    <>
      {/* ------게시글 댓글------ */}
      <li>
        <div className="comment-img">
          <img src={`${process.env.PUBLIC_URL}/images/user/${profil}`} alt={`${nick} 프로필`} />
        </div>

        <div className="comment-content">
          <span className='comment-nick'>{nick}</span>
          <p className='comment-txt'>{txt}</p>
          <span className="comment-time">{time}</span>
        </div>
      </li>
    </>
  );
}

export default Comment;