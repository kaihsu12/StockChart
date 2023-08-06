// hooks
import { useState } from 'react';
import DatePicker from 'react-datepicker';
// components
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
import Selector from '../selector/Selector';
//api
//icons
import closeIcon from '../../assets/close.svg';
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './EditTradeModal.scss';
import 'react-datepicker/dist/react-datepicker.css';

const EditTradeModal = () => {
  const [action, setAction] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  return (
    <>
      <div className='editTradeModal'>
        <div className='modal-overlay'></div>
        <div className='modal-container'>
          <div className='top'>
            <span className='bold-20'>修改交易資料</span>
            <img className='closeImg' src={closeIcon} alt='close-icon' />
          </div>
          <div className='modalMain'>
            <div className='inputGroup'>
              <div className='inputMain'>
                <div className='typeSelector'>
                  <div className='label bold-14'>類型</div>
                  <Selector />
                </div>
                <div className='dateInput'>
                  <div className='label bold-14'>日期</div>
                  <div className='datePicker'>
                    <img src={clockIcon} alt='clock-icon' />
                    <DatePicker
                      className='picker'
                      //selected={endDate}
                      //onChange={(date) => setEndDate(date)}
                      dateFormat='yyyy/MM/dd'
                      maxDate={new Date()}
                      showYearDropdown
                      scrollableYearDropdown
                    />
                    <img src={arrowIcon} alt='arrow-icon' />
                  </div>
                </div>
                <PrimaryInput
                  label='價格'
                  placeholder='請輸入價格'
                  value={price}
                  onChange={setPrice}
                />
                <PrimaryInput
                  label='數量'
                  placeholder='請輸入數量'
                  value={quantity}
                  onChange={setQuantity}
                />
              </div>
              <div className='remark'>
                <div className='label bold-14'>備註</div>
                <textarea
                  className='modalText medium-14'
                  value=''
                  placeholder='請輸入備註'
                  onChange=''
                />
              </div>
            </div>
            <div className='modalBtn'>
              <button className='secondary-button bold-16'>刪除</button>
              <button className='primary-button bold-16'>修改交易</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTradeModal;
