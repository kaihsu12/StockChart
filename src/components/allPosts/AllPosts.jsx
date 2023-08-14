// hooks
import { useRef, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
// components
import Tweet from '../tweet/Tweet';
// api
import { getTweets } from '../../api/tweet';
// others
import { formatTime } from '../../timeSwitcher/timeSwitcher';

const AllPosts = ({ currentTab }) => {
  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    error,
  } = useInfiniteQuery('/posts', ({ pageParam = 1 }) => getTweets(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post');
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  // 確認錯誤
  //console.log(status === 'error' && error);

  return data?.pages.map((pg) => {
    return pg.map((tweet, i) => {
      if (pg.length === i + 1) {
        return (
          <Tweet
            ref={lastPostRef}
            key={tweet.id}
            tweetId={tweet.id}
            name={tweet.transaction_user_name}
            account={tweet.transaction_user_account}
            tweetTime={formatTime(tweet.updated_on)}
            content={tweet.description}
            action={tweet.action}
            date={tweet.transaction_date}
            quantity={tweet.quantity}
            price={tweet.price}
            likes={tweet.like_count}
            isLiked={tweet.is_liked}
            replies={tweet.replies_count}
            activeTab={currentTab}
            avatar={tweet.transaction_user_avatar}
          />
        );
      }
      return (
        <Tweet
          key={tweet.id}
          tweetId={tweet.id}
          name={tweet.transaction_user_name}
          account={tweet.transaction_user_account}
          tweetTime={formatTime(tweet.updated_on)}
          content={tweet.description}
          action={tweet.action}
          date={tweet.transaction_date}
          quantity={tweet.quantity}
          price={tweet.price}
          likes={tweet.like_count}
          isLiked={tweet.is_liked}
          replies={tweet.replies_count}
          activeTab={currentTab}
          avatar={tweet.transaction_user_avatar}
        />
      );
    });
  });
};

export default AllPosts;
