import './HeartComment.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const HeartComment = ({ heart, comment }) => {
  return (
    <ul className='common-heart-comment'>
      <li>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <span>{heart}</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faComment} />
        <span>{comment}</span>
      </li>
    </ul>
  );
};

export default HeartComment;