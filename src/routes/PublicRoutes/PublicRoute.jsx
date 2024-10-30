import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../../components/public/FullPageLoader/FullPageLoader';


const PublicRoute = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </Suspense>
  )
}

export default PublicRoute;