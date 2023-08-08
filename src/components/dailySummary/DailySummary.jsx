import arrowIcon from '../../assets/arrow-green.svg';
import './DailySummary.scss';

const DailySummary = ({ dailyTradeSummary }) => {
  return (
    <div className='dailySummary'>
      <div className='mainInfo'>
        <span className='title medium-14'>本日淨損益</span>
        <div className='sum'>
          <span className='bold-28'>$1,400</span>
          <span>
            <p className='medium-12'>
              +{(dailyTradeSummary?.winRate * 100).toFixed(0)}% 勝率
            </p>
            <img src={arrowIcon} alt='bell-icon' />
          </span>
        </div>
      </div>
      <div className='detail regular-14'>
        <span>
          <p>總口數</p>
          <p>x{dailyTradeSummary.roundTrip}</p>
        </span>
        <span>
          <p>合計</p>
          <p
            className={
              String(dailyTradeSummary.pAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(dailyTradeSummary.pAndL).includes('-')
              ? dailyTradeSummary.pAndL
              : `+${dailyTradeSummary.pAndL}`}
          </p>
        </span>
        <span>
          <p>淨損益</p>
          <p
            className={
              String(dailyTradeSummary.netPAndL).includes('-') ? 'red' : 'green'
            }
          >
            {String(dailyTradeSummary.netPAndL).includes('-')
              ? dailyTradeSummary.netPAndL
              : `+${dailyTradeSummary.netPAndL}`}
          </p>
        </span>
        <span>
          <p>盈虧比</p>
          <p>{Number(dailyTradeSummary?.riskRatio)?.toFixed(2)}</p>
        </span>
      </div>
    </div>
  );
};

export default DailySummary;
