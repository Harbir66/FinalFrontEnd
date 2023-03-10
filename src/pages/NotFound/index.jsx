import React from 'react';
import { Sidebar, Header } from '../../components';
import './pageNotFound.css';

function PageNotFound() {
  return (
    <div className="main">
      <Sidebar collections={[]} />
      <div className="pageNotFoundContainer">
        <Header heading="Page Not Found" />
        <div className="content">
          <p>404 Error. Page not found</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
