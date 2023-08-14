// hooks
import { useQueryClient } from 'react-query';
//style
import './DeleteBox.scss';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { deleteReply } from '../../api/tweet';

const DeleteBox = ({ userId, replyId, setVisible, visible, setTweet }) => {
  const { currentMember } = useAuth();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      if (currentMember.id === userId) {
        await deleteReply(replyId);

        queryClient.invalidateQueries('/replies');

        setTweet?.((tweet) => {
          return {
            ...tweet,
            replies_count: Number(tweet.replies_count) - 1,
          };
        });
      } else {
        setVisible(!visible);
      }
    } catch (error) {
      console.log('刪除回覆失敗:', error);
    }
  };

  return (
    <div className='deleteBox'>
      <span
        className={`${currentMember.id !== userId && 'gray'} regular-14`}
        onClick={handleDelete}
      >
        刪除回覆
      </span>
    </div>
  );
};

export default DeleteBox;
