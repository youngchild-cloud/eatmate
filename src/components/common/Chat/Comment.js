import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Comment.scss';

function Comment({ profil, nick, txt, time, isMine, onDelete }) {
  return (
    <>
      <li>
        <div className="comment-img">
          <img src={`http://localhost:9070/uploads/user/${profil}`} alt={`${nick} 프로필`} />
        </div>

        <div className="comment-content">
          <span className='comment-nick'>{nick}</span>
          <p className='comment-txt'>{txt}</p>
          <span className="comment-time">{time}</span>
          {
            isMine &&
            <button className="comment-delete" onClick={onDelete}>
              <FontAwesomeIcon icon={faXmark} />
              <span className="blind">삭제</span>
            </button>
          }
        </div>
      </li>
    </>
  );
}

export default Comment;