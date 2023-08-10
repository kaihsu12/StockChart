// react
import { useState, useEffect } from 'react';
// component
import TopIncome from './topIncome/TopIncome.jsx';
import PieChartSection from '../../components/dashboard/pieChartSection/PieChartSection.jsx';
import LineChartSection from '../../components/dashboard/lineChartSection/LineChartSection.jsx';
// styles
import './DashBoard.scss';

export const DashBoard = ({
  transactions,
  averageLossPoints,
  averageWinPoints,
  winRate,
  totalWinPoints,
  totalLossPoints,
  winCount,
  lossCount,
  pAndL, // 總損益
  netPAndL,
  roundTrip, // 總趟次
  riskRatio, // 盈虧比
}) => {
  const [newData, setNewData] = useState([]);

  console.log(transactions);

  useEffect(() => {
    const temData = transactions?.map?.((item) => ({
      date: item.date.slice(5, 10),
      pandl: item.cumulative_pandl ?? 0,
      trip: item.round_trip,
    }));
    setNewData(temData);
  }, [transactions]);

  console.log(newData);
  return (
    <>
      <div className='dashBoardContainer'>
        <TopIncome
          netPAndL={netPAndL}
          riskRatio={riskRatio}
          averageLossPoints={averageLossPoints}
          averageWinPoints={averageWinPoints}
          roundTrip={roundTrip}
        />
        <div className='chartSection'>
          <div className='leftChart'>
            <div className='pieChart'>
              <div className='medium-16'>整體勝率</div>
              <div className='winrate'>
                {winRate ? `${(winRate * 100).toFixed(0)}` : '0'}
              </div>
              <PieChartSection
                totalWinPoints={totalWinPoints}
                totalLossPoints={totalLossPoints}
              />
              <div className='count'>
                <div className='winCount bold-16'>{winCount || '0'}</div>
                <div className='verticalLine'></div>
                <div className='lossCount bold-16'>{lossCount || '0'}</div>
              </div>
            </div>
          </div>
          <div className='rightChart'>
            <LineChartSection transactions={newData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
