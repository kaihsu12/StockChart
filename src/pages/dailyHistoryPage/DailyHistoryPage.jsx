// hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import DailyRecord from '../../components/dailyRecord/DailyRecord';
import DailySummary from '../../components/dailySummary/DailySummary';
import PositiveAndNegativeBarChart from '../../components/dashboard/PositiveAndNegativeBarChart/PositiveAndNegativeBarChart';
// context
import { useAuth } from '../../contexts/AuthContext';
import { useDate } from '../../contexts/DateContext';
// api
import { getTodaysTransactionsData } from '../../api/diary';
// style
import './DailyHistoryPage.scss';
// functions
import { formatDateForApiWithoutTime } from '../../timeSwitcher/timeSwitcher';

const DailyHistoryPage = () => {
  const navigate = useNavigate();
  // context
  const { isAuthenticated, currentMember } = useAuth();
  const { ChosenDate } = useDate();
  const id = currentMember?.id;

  // states
  const [historyDate, setHistoryDate] = useState(new Date(ChosenDate)); // 交易紀錄選擇日期和API送出日
  const [todayTransactions, setTodayTransactions] = useState('');
  const [lineChartData, setLineChartData] = useState([]);
  const [dailyTradeSummary, setDailyTradeSummary] = useState('');
  const [switcher, setSwitcher] = useState(false); // 渲染重整資料

  // const handleSearch = () => {
  //   setHistoryDate(calendar);
  //   setSwitcher((current) => !current);
  // };

  useEffect(() => {
    const tradeDate = formatDateForApiWithoutTime(historyDate);

    const getLineChartData = async () => {
      const res = await getTodaysTransactionsData({
        id: id,
        date: tradeDate,
      });

      console.log(res); // 觀察資料用

      setTodayTransactions(res.transactions);
      setDailyTradeSummary(res.historyData);

      const temData = res.transactions
        ?.map((item) => {
          if (
            item.status === 'closed' &&
            item.category === 'closing_position'
          ) {
            return {
              date: item.transaction_date.slice(5, 10),
              pandl: item.pandl,
            };
          }
          return null;
        })
        .filter(Boolean); // 使用 filter 方法來過濾掉值為 null 的項目
      setLineChartData(temData);
    };
    getLineChartData();
  }, [switcher, historyDate]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <div className='dailyHistoryPage'>
        <Navbar />
        <div className='dailyHistoryBody'>
          <Header />
          <div className='dailyHistoryMain'>
            <div className='dailySection'>
              <div className='dailyDiagram'>
                <PositiveAndNegativeBarChart transactions={lineChartData} />
              </div>
              <div className='listSec'>
                <DailyRecord
                  todayTransactions={todayTransactions}
                  setTodayTransactions={setTodayTransactions}
                  setSwitcher={setSwitcher}
                  historyDate={historyDate}
                  setHistoryDate={setHistoryDate}
                />
                <DailySummary dailyTradeSummary={dailyTradeSummary} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyHistoryPage;
