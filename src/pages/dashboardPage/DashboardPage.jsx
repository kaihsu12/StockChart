// react
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// component
import DashBoard from '../../components/dashboard/DashBoard';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { getTransactions } from '../../api/diary';
// style
import './DashboardPage.scss';

const DashboardPage = () => {
  const [data, setData] = useState();
  const [transactions, setTransactions] = useState([]);
  const [winRate, setWinRate] = useState('');
  const [totalWinPoints, setTotalWinPoints] = useState('');
  const [totalLossPoints, setTotalLossPoints] = useState('');
  const [winCount, setWinCount] = useState('');
  const [lossCount, setLossCount] = useState('');
  const [pAndL, setPAndL] = useState('');
  const [roundTrip, setRoundTrip] = useState('');
  const [netPAndL, setNetPAndL] = useState('');
  const [averageLossPoints, setAverageLossPoints] = useState('');
  const [averageWinPoints, setAverageWinPoints] = useState('');
  const [riskRatio, setRiskRatio] = useState('');

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const transactionData = async () => {
      const dateString = new Date().toLocaleDateString();
      const res = await getTransactions({
        startDate: '2023-07-10',
        endDate: '2023-08-27',
      });
      console.log(res); // 觀察資料用
      setData(res);
      setTransactions(res.data.result.transactionsArray);
      setWinRate(res.data.result.winRate);
      setTotalWinPoints(res.data.result.totalWinPoints);
      setTotalLossPoints(res.data.result.totalLossPoints);
      setPAndL(res.data.result.pAndL);
      setRoundTrip(res.data.result.roundTrip);
      setNetPAndL(res.data.result.netPAndL);
      setAverageLossPoints(res.data.result.averageLossPoints);
      setAverageWinPoints(res.data.result.averageWinPoints);
      setRiskRatio(res.data.result.riskRatio);
      setWinCount(res.data.result.winCount);
      setLossCount(res.data.result.lossCount);
    };
    transactionData();
  }, []);
  
  // 觀察資料用
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='DashboarContainer'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='rightContainer'>
        <Header />
        <DashBoard
          transactions={transactions}
          winRate={winRate}
          totalWinPoints={totalWinPoints}
          totalLossPoints={totalLossPoints}
          winCount={winCount}
          lossCount={lossCount}
          pAndL={pAndL}
          roundTrip={roundTrip}
          netPAndL={netPAndL}
          averageLossPoints={averageLossPoints}
          averageWinPoints={averageWinPoints}
          riskRatio={riskRatio}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
