// hooks
import React from 'react';
// icons
import bellIcon from '../../assets/bell-gray.svg';
import userImg from '../../assets/user.jpg';
// context
import { useAuth } from '../../contexts/AuthContext';
// style
import './Header.scss';
// others
import { formatDate } from '../../timeSwitcher/timeSwitcher';

const Header = () => {
  const { currentMember } = useAuth();

  // to output day of week
  const date = new Date();
  const daysOfWeek = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  return (
    <header className='header'>
      <div className='date'>
        <span className='medium-16'>{dayOfWeek}</span>
        <span className='medium-16'>{formatDate(currentDate)}</span>
      </div>
      <div className='widgetSec'>
        <span className='bellWidget'>
          <img src={bellIcon} alt='bell-icon' />
        </span>
        <div className='userWidget'>
          <img className='userImg' src={userImg} alt='user-img' />
          <span className='userInfo'>
            <p className='bold-14'>
              {currentMember.name?.slice(0, 1).toUpperCase() +
                currentMember.name?.slice(1)}
            </p>
            <p className='regular-14'>@{currentMember.account}</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
