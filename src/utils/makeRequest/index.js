import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, dynamicConfig, navigate) => {
  try {
    const requestDetails = {
      method: apiEndPoint.method,
      url: `${BACKEND_URL}/${apiEndPoint.url}`,
      ...dynamicConfig,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    const { data } = await axios(requestDetails);
    return data;
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

export default makeRequest;
