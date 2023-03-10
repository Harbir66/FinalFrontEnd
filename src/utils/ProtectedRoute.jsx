import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState('');
  const [text, setText] = React.useState('Authenticating...');
  const navigate = useNavigate();
  React.useEffect(() => {
    const value = localStorage.getItem('token');
    const requestDetails = {
      method: 'POST',
      url: 'http://localhost:3010/api/token/validate',
      data: {},
      headers: {
        Authorization: `Bearer ${value}`,
      },
    };
    axios(requestDetails)
      .then((response) => {
        if (response.data) {
          setUser(response.data.email);
          setText(`Welcome ${user}!`);
          setToken(true);
        } else {
          setToken(false);
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        }
      })
      .catch((error) => {
        setToken(false);
        setText(`Invalid Token${error.message.trim()}`);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      });
  }, []);

  return <div>{token ? <div>{children}</div> : <h1>{text}</h1>}</div>;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
