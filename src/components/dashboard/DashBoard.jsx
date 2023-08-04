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
              <div className='bold-16'>勝率：{winRate ?? 'winRate'}</div>
              <div className='line'></div>
              <PieChartSection
                totalWinPoints={totalWinPoints}
                totalLossPoints={totalLossPoints}
              />
              <div>獲利次數：{winCount || 'winCount'}</div>
              <div>虧損次數：{lossCount || 'lossCount'}</div>
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
