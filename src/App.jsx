import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/auth/Header/Header";
import Sidemenu from "./pages/auth/Sidemenu/Sidemenu";
import AuthRoute from "./routes/AuthRoutes/AuthRoute";
import QcRoute from "./routes/QcRoutes/QcRoute";
import PublicRoute from "./routes/PublicRoutes/PublicRoute";

import Employees from "./pages/Employees/Employees";
import Projects from "./pages/Projects/Projects";
import Orders from "./pages/Orders/Orders";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/redcuers/user.reducer";
import Task from "./pages/task/Task";
function App() {
  const storedValue = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(storedValue);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoggedIn(storedValue === "true");
  }, [storedValue]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);
  return (
    <div className="pos-rel">
      <BrowserRouter>
        {isLoggedIn && (
          <>
            <Sidemenu setIsLoggedIn={setIsLoggedIn} />
            <Header setIsLoggedIn={setIsLoggedIn} />
          </>
        )}
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          <Route
            path="/auth/*"
            element={
              <AuthRoute
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/qc/*"
            element={isLoggedIn ? <QcRoute /> : <Navigate to="/auth/login" />}
          />
          <Route
            path="/employees/*"
            element={isLoggedIn ? <Employees /> : <Navigate to="/auth/login" />}
          />
          <Route
            path="/projects/*"
            element={isLoggedIn ? <Projects /> : <Navigate to="/auth/login" />}
          />
          <Route
            path="/orders/*"
            element={isLoggedIn ? <Orders /> : <Navigate to="/auth/login" />}
          />
          <Route
            path="/addTask/*"
            element={isLoggedIn ? <Task /> : <Navigate to="/auth/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
