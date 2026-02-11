import './Comment.scss';

function Comment({ profil, nick, txt, time, isMine, onDelete }) {
  return (
    <>
      {/* ------게시글 댓글------ */}
      <li>
        <div className="comment-img">
          <img src={`http://localhost:9070/uploads/user/${profil}`} alt={`${nick} 프로필`} />
        </div>

        <div className="comment-content">
          <span className='comment-nick'>{nick}</span>
          <p className='comment-txt'>{txt}</p>
          <span className="comment-time">{time} {isMine && (<>
            {' '} &middot;{' '}
            <button className="comment-delete" onClick={onDelete}>
              삭제
            </button>
          </>)}</span>


        </div>
      </li>
    </>
  );
}

export default Comment;