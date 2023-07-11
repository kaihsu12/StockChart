import  LoginButton  from './components/LoginButton/LoginButton';
import AuthInput from './components/AuthInput/AuthInput';
import './loginPage.scss';

const LoginPage = () => {
  return (
    <div className='loginContainer'>
      <h1 className='title'>Input Box</h1>
      <div className='inputContainer'>
        <AuthInput
          label='帳號'
          placeholder={'請輸入帳號'}
        />
        <AuthInput
          label='密碼'
          placeholder={'請輸入帳號'}
        />
        <LoginButton></LoginButton>
      </div>
    </div>
  );
};

export default LoginPage;
