// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import axiosInstance, { baseUrl } from '../../api/axiosInstance';
// css
import './SettingPage.scss';

const SettingPage = () => {
  // currentMemberData
  const { isAuthenticated, currentMember } = useAuth();
  const currentAvatar = currentMember?.avatar;
  const currentId = currentMember?.id;
  const currentAccount = currentMember?.account;
  const currentUsername = currentMember?.name;
  const currentEmail = currentMember?.email;
  // useState
  const [account, setAccount] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [currentImage, setCurrentImage] = useState(currentAvatar);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
    setCurrentImage(URL.createObjectURL(file));
  };

  const handleImageSubmit = async () => {
    const formData = {
      id: currentId,
      account: account,
      username: username,
      email: email,
      password: password,
      newPassword: checkPassword,
      avatar: selectedImage,
    };
    const putUseSettingInfo = async (formData, currentId) => {
      try {
        const res = await axiosInstance.put(
          `${baseUrl}/users/${currentId}`,
          formData,
          { headers: { 'Content-type': 'multipart/form-data' } }
        );
        return res;
      } catch (error) {
        console.error(error);
        console.error(error.response.data.message);
      }
    };
    const res = await putUseSettingInfo(formData, currentId);
    console.log(res);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='settingPage'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='settingBody'>
        <Header />
        <div className='settingMain'>
          <div className='photoEdit'>
            <img className='userImg' src={currentImage} alt='user-img' />
            <label htmlFor='666'>上傳圖片</label>
            <input
              type='file'
              id='666'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>
          <div className='settingInput'>
            <PrimaryInput
              label='帳號'
              placeholder={currentAccount}
              value={account}
              onChange={(accountInputValue) => setAccount(accountInputValue)}
            />
            <PrimaryInput
              label='名稱'
              placeholder={currentUsername}
              value={username}
              onChange={(nameInputValue) => setUserName(nameInputValue)}
            />
            <PrimaryInput
              label='Email'
              placeholder={currentEmail}
              value={email}
              onChange={(emailInputValue) => setEmail(emailInputValue)}
            />
            <PrimaryInput
              type='password'
              label='密碼'
              placeholder={'請輸入密碼'}
              value={password}
              onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            />
            <PrimaryInput
              type='password'
              label='密碼確認'
              placeholder={'請輸入密碼'}
              value={checkPassword}
              onChange={(checkPasswordInputValue) =>
                setCheckPassword(checkPasswordInputValue)
              }
            />
            <button
              className='secondary-button bold-16'
              onClick={handleImageSubmit}>
              更改資料
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
