import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/google-icon.svg';
import { gooleLogin } from '../../api/auth';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/main');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [navigate, isAuthenticated]);

  const handleGoogleLogin = async () => {
    try {
      await gooleLogin();
    } catch (error) {
      console.error('[Login Failed]:', error);
    }
  };

  return (
    <div>
      <p>homepage</p>
      <button
        className='googleBtn secondary-button'
        onClick={handleGoogleLogin}
      >
        <img src={googleLogo} alt='google-logo' />
        <span className='bold-18'>Google登入</span>
      </button>
    </div>
  );
};

export default HomePage;
