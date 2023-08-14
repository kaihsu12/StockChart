// hooks
import { useQueryClient } from 'react-query';
//style
import './UnpublishBox.scss';
// api
import { unpublishTweet } from '../../api/tweet';

const UnpublishBox = ({ setVisible, visible, tweetId }) => {
  const queryClient = useQueryClient();

  const handleUnpublish = async () => {
    try {
      await unpublishTweet(tweetId);
      queryClient.invalidateQueries('/user-posts');
    } catch (error) {
      console.log('隱藏交易紀錄失敗:', error);
    }
  };

  return (
    <div className='unpublishBox' onClick={() => setVisible(!visible)}>
      <span className='regular-14' onClick={handleUnpublish}>
        隱藏公開
      </span>
    </div>
  );
};

export default UnpublishBox;
