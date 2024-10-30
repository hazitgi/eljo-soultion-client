import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../../components/public/FullPageLoader/FullPageLoader';

const Login = lazy(() => import('../../pages/auth/Login/Login'));


const AuthRoute = ({ setIsLoggedIn, isLoggedIn }) => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
 
      </Routes>
    </Suspense>
  )
}

export default AuthRoute;