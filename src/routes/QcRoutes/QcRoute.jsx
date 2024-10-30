import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../../components/public/FullPageLoader/FullPageLoader';

const QcModule = lazy(() => import('../../pages/qc/QcModule/QcModule'));
const QcCompletedModule = lazy(() => import('../../pages/qc/QcCompletedModule/QcCompletedModule'));
const QcList = lazy(() => import('../../pages/qc/QcList/QcList'));
const QcCompletedList = lazy(() => import('../../pages/qc/QcCompletedList/QcCompletedList'));

const QcRoute = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Navigate to='/qualitychecklist' />} />
                <Route path="/qcmodule" element={<QcModule />} />
                <Route path="/qcmodulecompleted" element={<QcCompletedModule />} />
                <Route path="/qualitychecklist" element={<QcList />} />
                <Route path="/completedqualitychecklist" element={<QcCompletedList />} />
            </Routes>
        </Suspense>
    )
}

export default QcRoute;