// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import LoginPage from '../loginPage/loginPage';
import SignupPage from '../signupPage/signupPage';
import AdminLoginPage from '../adminLoginPage/adminLoginPage';
import MainPage from '../mainPage/mainPage';
import DiaryPage from '../diaryPage/diaryPage'
// style
import './reset.scss'
import './base.scss'

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='admin' element={<AdminLoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path='main/diary' element={<DiaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
