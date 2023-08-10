// hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
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
// icons
import clockIcon from '../../assets/clock.svg';
import arrowIcon from '../../assets/arrow-down.svg';
// style
import './DailyHistoryPage.scss';
import 'react-datepicker/dist/react-datepicker.css';
// functions
import {
  formatDate,
  formatDateForApiWithoutTime,
} from '../../timeSwitcher/timeSwitcher';

const DailyHistoryPage = () => {
  const navigate = useNavigate();
  // context
  const { isAuthenticated, currentMember } = useAuth();
  const { ChosenDate } = useDate();
  const id = currentMember?.id;

  // stste
  const [historyDate, setHistoryDate] = useState(new Date(ChosenDate)); // 請API日期
  const [calendar, setCalendar] = useState(new Date(ChosenDate)); //日記套件日期
  const [todayTransactions, setTodayTransactions] = useState('');
  const [dailyTradeSummary, setDailyTradeSummary] = useState('');
  const [switcher, setSwitcher] = useState(false); // 渲染重整資料
  const date = todayTransactions?.[0]?.transaction_date?.substr(0, 10);

  const handleSearch = () => {
    setHistoryDate(calendar);
    setSwitcher((current) => !current);
  };

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
    };
    getLineChartData();
  }, [switcher]);

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
            <div className='filterBox'>
              <div className='datePicker'>
                <img src={clockIcon} alt='clock-icon' />
                <DatePicker
                  className='picker'
                  selected={calendar}
                  onChange={(date) => setCalendar(date)}
                  dateFormat='yyyy/MM/dd'
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                />
                <img src={arrowIcon} alt='arrow-icon' />
              </div>
              <button
                className='btn primary-button bold-16'
                onClick={handleSearch}>
                查詢
              </button>
            </div>
            <div className='dailySection'>
              <div className='dailyDiagram'>
                <PositiveAndNegativeBarChart transactions={todayTransactions} />
              </div>
              <div className='listSec'>
                <DailyRecord
                  todayTransactions={todayTransactions}
                  setTodayTransactions={setTodayTransactions}
                  date={formatDate(date)}
                  setSwitcher={setSwitcher}
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
