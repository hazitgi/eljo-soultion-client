import  { Suspense } from "react";
import {  Route, Routes } from "react-router-dom";
import Loader from "../../components/public/FullPageLoader/FullPageLoader";
import Employees from "../../pages/Employees/Employees";


const EmployeeRoute = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Employees/>} />
        {/* <Route path="/qcmodule" element={<QcModule />} />
        <Route path="/qcmodulecompleted" element={<QcCompletedModule />} />
        <Route path="/qualitychecklist" element={<QcList />} />
        <Route
          path="/completedqualitychecklist"
          element={<QcCompletedList />}
        /> */}
      </Routes>
    </Suspense>
  );
};

export default EmployeeRoute;
