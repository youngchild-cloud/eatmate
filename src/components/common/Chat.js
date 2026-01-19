import './Chat.scss';

import Comment from './Chat/Comment';
import InputComment from './Chat/InputComment';

function Chat(props) {
  return (
    <article className='common-chat'>
      <InputComment image={'user01.png'} />
      <ul className='comm-comment'>
        <Comment profil={'user02.png'} nick={'닉네임'} txt={'댓글 내용'} time={'10분전'} />
        <Comment profil={'user03.png'} nick={'닉네임'} txt={'댓글 내용'} time={'10분전'} />
      </ul>
    </article>
  );
}

export default Chat;