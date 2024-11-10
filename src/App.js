import "./styles.css";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { gapi } from "gapi-script";

import GoogleOAuthLogin from "./commons/auth/login";
import LoginPage from "./components/loginPage/loginPage";
import Dashboards from "./components/dashboards/dashboards";
import ProtectedRoutes from "./routes/protectedRoutes";
import PublicRoutes from "./routes/publicRoutes";

const App = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: ""
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <PublicRoutes element={<LoginPage AuthenticationComponent={GoogleOAuthLogin} />} />
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboards />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
