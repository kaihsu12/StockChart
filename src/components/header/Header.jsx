import React from 'react';
import bellIcon from '../../assets/bell-gray.svg';
import userImg from '../../assets/user.jpg';
import './Header.scss';

const Header = () => {
  const date = new Date();

  return (
    <header className='header'>
      <div className='date'>
        <span className='medium-16'>{date.toLocaleDateString()}</span>
        <span className='medium-16'>{date.toLocaleTimeString()}</span>
      </div>
      <div className='widgetSec'>
        <span className='bellWidget'>
          <img src={bellIcon} alt='bell-icon' />
        </span>
        <div className='userWidget'>
          <img className='userImg' src={userImg} alt='user-img' />
          <span className='userInfo'>
            <p className='bold-14'>Tylor Filan</p>
            <p className='regular-14'>@tylor</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
