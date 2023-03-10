import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  HOME_ROUTE,
  ERROR_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  CONTENT_TYPES,
} from './constants/routes';
import {
  Home,
  Error,
  PageNotFound,
  Register,
  Login,
  ContentTypes,
} from './pages';
import ProtectedRoutes from './utils/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={REGISTER_ROUTE} element={<Register />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path={`${CONTENT_TYPES}/*`}
            element={
              <ProtectedRoutes>
                <ContentTypes />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
