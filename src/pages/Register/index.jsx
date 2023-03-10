import React from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import registerImage from '../../assets/undraw-upload-re-pasx@3x.png';
import { ERROR_ROUTE } from '../../constants/routes';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [text, setText] = React.useState('Register');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password should be same. TRY AGAIN !!');
      return;
    }
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const requestDetails = {
        method: 'POST',
        url: 'http://localhost:3010/api/register',
        data,
      };
      const response = await axios(requestDetails);
      if (response.status === 201) {
        setText('Registered !!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      if (navigate) {
        const errorCode = error.response?.status;
        if (errorCode) {
          navigate(`${ERROR_ROUTE}/${errorCode}`);
        } else {
          navigate(`${ERROR_ROUTE}`);
        }
      }
    }
  };
  return (
    <div className="register">
      <div className="register-image-container">
        <div>
          <h1>Design APIs fast,</h1>
          <h1>Manage content easily.</h1>
        </div>
        <img
          className="register-image"
          src={registerImage}
          alt="register-art"
        />
      </div>
      <div className="register-form">
        <h1>Register for CMS+ account</h1>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">{text}</button>
          <span className="register-button">
            <button onClick={handleClick} type="button">
              Already a User??
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
