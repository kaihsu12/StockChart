// hooks
import { useQueryClient } from 'react-query';
// components
import AllPosts from '../allPosts/AllPosts';
import UserPosts from '../userPost/UserPosts';
import LikedPosts from '../likedPosts/LikedPosts';
// style
import './TabSwitcher.scss';

const TabSwitcher = ({ setTab, activeTab, setPosts }) => {
  const queryClient = useQueryClient();
  return (
    <ul className='tabSwitcher'>
      <li className='bold-16'>
        <p
          className={activeTab === 'all' && 'active'}
          onClick={() => {
            setTab('all');
            setPosts(<AllPosts currentTab={'all'} />);
            queryClient.setQueryData('/posts');
            queryClient.invalidateQueries('/posts');
          }}
        >
          所有公開
        </p>
      </li>
      <li
        className={
          activeTab === 'all' || activeTab === 'user'
            ? 'purpleLine'
            : 'verticalLine'
        }
      ></li>
      <li className='bold-16'>
        <p
          className={activeTab === 'user' && 'active'}
          onClick={() => {
            setTab('user');
            setPosts(<UserPosts currentTab={'user'} />);
            queryClient.setQueryData('/user-posts');
            queryClient.invalidateQueries('/user-posts');
          }}
        >
          個人
        </p>
      </li>
      <li
        className={
          activeTab === 'like' || activeTab === 'user'
            ? 'purpleLine'
            : 'verticalLine'
        }
      ></li>
      <li className='bold-16'>
        <p
          className={activeTab === 'like' && 'active'}
          onClick={() => {
            setTab('like');
            setPosts(<LikedPosts currentTab={'like'} />);
            queryClient.setQueryData('/like-posts');
            queryClient.invalidateQueries('/like-posts');
          }}
        >
          喜歡
        </p>
      </li>
    </ul>
  );
};

export default TabSwitcher;
