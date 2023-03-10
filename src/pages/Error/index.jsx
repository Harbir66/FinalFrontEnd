import React from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar, Header } from '../../components';
import './Error.css';

function Error() {
  const { errorCode } = useParams();
  return (
    <div className="main">
      <Sidebar collections={[]} />
      <div className="errorContainer">
        <Header heading="Error" />
        <div className="content">
          <p>Something went wrong!</p>
          {errorCode && <p>{`Error code: ${errorCode}`}</p>}
        </div>
      </div>
    </div>
  );
}

export default Error;
