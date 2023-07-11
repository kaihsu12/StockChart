import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <button className='backButton'>
        <img alt='arrow icon' />
      </button>
      <div className='userInfo'>
        <h5 className='medium'>test</h5>
        <div className='tweetCount'>test 推文</div>
      </div>
    </header>
  );
};

export default Header;
