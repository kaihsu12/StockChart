import React from 'react';
import './TopIncome.scss';

export const TopIncome = ({
  averageLossPoints,
  averageWinPoints,
  netPAndL, // 總損益
  roundTrip, // 總趟次
  riskRatio, // 盈虧比
}) => {
  const netPAndLSum = netPAndL ? netPAndL : '0';
  return (
    <>
      <div className='topIncomeContainer'>
        <div className='toatalIncome'>
          <span className='medium-14'>整體淨損益</span>
          <span
            className={`bold-28 panl ${
              String(netPAndLSum).includes('-') ? 'red' : 'green'
            } `}
          >
            {String(netPAndLSum).includes('-')
              ? `$${netPAndLSum * 200}`
              : `$+${netPAndLSum * 200}`}
          </span>
          <span className='regular-12'>總交易量： {roundTrip}</span>
        </div>
        <div className='averageIncome'>
          <div className='average average1'>
            <div className='medium-14'>盈虧比</div>
            <div className='bold-28 context1'>{riskRatio || 0}</div>
          </div>
          <div className='verticalLine'></div>
          <div className='average average2'>
            <div className='medium-14'>平均獲利</div>
            <div className='bold-28 context2'>{averageWinPoints || '$0'}</div>
          </div>
          <div className='verticalLine'></div>
          <div className='average average3'>
            <div className='medium-14'>平均虧損</div>
            <div className='bold-28 context3'>{averageLossPoints || '$0'}</div>
          </div>
        </div>
      </div>
    </>
  );
};
//   <div>{averageLossPoints ?? 'averageLossPoints'}</div>
export default TopIncome;
