// react
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // page
import LoginPage from '../loginPage/LoginPage';
import SignupPage from '../signupPage/SignupPage';
import AdminLoginPage from '../adminLoginPage/AdminLoginPage';
import MainPage from '../mainPage/MainPage';
import DiaryPage from '../diaryPage/DiaryPage';
import HistoryPage from '../historyPage/HistoryPage';
import DashboardPage from '../dashboardPage/DashboardPage';
// style
import './reset.scss';
import './base.scss';

const basename = process.env.PUBLIC_URL;

const Home = () => {
  return (
    <div>
      <Router basename={basename}>
        {/* <AuthProvider> */}
        <Routes>
          <Route path='*' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/admin' element={<AdminLoginPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/diary' element={<DiaryPage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
};

export default Home;
