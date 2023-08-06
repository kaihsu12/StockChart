// hooks

//api
// icons
import closeIcon from '../../assets/close.svg';
import buyIcon from '../../assets/buy.svg';
import sellIcon from '../../assets/sell.svg';
// style
import './PublishModal.scss';

const PublishModal = () => {
  return (
    <>
      (
      <div className='publishModal'>
        <div className='modal-overlay'></div>
        <div className='modal-container'>
          <div className='top'>
            <span className='bold-20'>單筆交易明細</span>
            <img className='closeImg' src={closeIcon} alt='close-icon' />
          </div>
          <div className='modalMain'>
            <div className='modalContent'>
              <div className='singleTrade'>
                <ul className='formTitles bold-14'>
                  <li>類型</li>
                  <li>日期</li>
                  <li>交易量</li>
                  <li>成交價</li>
                </ul>
                <ul className='formCotent regular-14'>
                  <li>
                    <span>
                      <img src={sellIcon} alt='trade-Icon' />
                    </span>

                    <p className='sell'>賣</p>
                  </li>
                  <li>
                    <p>2023/07/15</p>
                    <p>12:00:00</p>
                  </li>
                  <li>x1</li>
                  <li className=''>$12,038</li>
                </ul>
              </div>
              <div className='remark'>
                <div className='bold-14'>備註</div>
                <p className='regular-14'>
                  From the latest information from the Fed it is likely that
                  there will be further hikes in interest rates, even if we are
                  close to the peak. The period of disinflation is likely to
                  occur in 2024.
                </p>
              </div>
              <div className='modalBtn'>
                <button className='btn primary-button bold-16'>公開交易</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default PublishModal;
