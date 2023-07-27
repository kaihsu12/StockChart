// react
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // page
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';
import AdminLoginPage from './pages/adminLoginPage/AdminLoginPage';
import MainPage from './pages/mainPage/MainPage';
import DiaryPage from './pages/diaryPage/DiaryPage';
import HistoryPage from './pages/historyPage/HistoryPage';
import DashboardPage from './pages/dashboardPage/DashboardPage';
// style
import './reset.scss';
import './base.scss';

const basename = process.env.PUBLIC_URL;

const App = () => {
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

export default App;
