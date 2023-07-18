import msgIcon from '../../assets/message.svg';
import './HistoryForm.scss';

const title = [
  '日期',
  '淨損益',
  '勝率％',
  '盈虧比',
  '總單數',
  '+單數',
  '-單數',
  '早盤勝率',
  '早盤總單數',
  '夜盤勝率',
  '夜版總單數',
  '備註',
];

const HistoryForm = () => {
  return (
    <div className='historyForm'>
      <div className='titleBody'>
        <ul className='bold-14'>
          {title.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
      </div>
      <div className='mainBody regular-14'>
        <ul>
          <li>2023/07/24</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>
            <img src={msgIcon} alt='message-icon' />
          </li>
        </ul>
        <ul>
          <li>2023/07/24</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>
            <img src={msgIcon} alt='message-icon' />
          </li>
        </ul>
      </div>
      <div className='subBody regular-14'>
        <ul>
          <li className='bold-14'>累積</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>平均</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>均口淨損益</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li></li>
        </ul>
        <ul>
          <li className='bold-14'>夏普率</li>
          <li>+20</li>
          <li>100%</li>
          <li>16.00 : 0</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li>0%</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryForm;
