// hooks
import { useState } from 'react';
// icons
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './Selector.scss';

const Selector = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='selector'>
      <input
        type='text'
        className='default medium-14'
        placeholder='請選擇類型'
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      />
      {isVisible && (
        <div class='options medium-14'>
          <ul>
            <li
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              買
            </li>
            <li
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              賣
            </li>
          </ul>
        </div>
      )}
      <img src={arrowIcon} alt='arrow-icon' />
    </div>
  );
};

export default Selector;
