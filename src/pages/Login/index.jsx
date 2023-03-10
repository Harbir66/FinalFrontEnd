import React from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import registerImage from '../../assets/undraw-upload-re-pasx@3x.png';
import { CONTENT_TYPES, ERROR_ROUTE } from '../../constants/routes';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [text, setText] = React.useState('Login');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const requestDetails = {
        method: 'POST',
        url: 'http://localhost:3010/api/login',
        data,
      };
      const response = await axios(requestDetails);
      const token = response.data.jwt;
      localStorage.setItem('token', token);
      if (response.status === 200) {
        setText('Logged In !!');
        setTimeout(() => {
          navigate(CONTENT_TYPES);
        }, 1000);
      }
    } catch (error) {
      setText('Invalid Credentials !!');
      setTimeout(() => {
        const errorCode = error.response?.status;
        if (errorCode) {
          navigate(`${ERROR_ROUTE}/${errorCode}`);
        } else {
          navigate(`${ERROR_ROUTE}`);
        }
      }, 1000);
    }
  };
  return (
    <div className="login">
      <div className="login-image-container">
        <div>
          <h1>Design APIs fast,</h1>
          <h1>Manage content easily.</h1>
        </div>
        <img className="login-image" src={registerImage} alt="register-art" />
      </div>
      <div className="login-form">
        <h1>Login to your CMS+ account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{text}</button>
          <span className="register-button">
            <button onClick={handleClick} type="button">
              Register User??
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
