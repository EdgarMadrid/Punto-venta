import React, { Suspense } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

//Views
const Login = React.lazy(() => import("./views/login/Login"));
const Register = React.lazy(() => import("./views/register/Register"));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
// const Profile = React.lazy(() => import('./views/profile/Profile'))

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/" name="Login Page" element={<Login />} />
          <Route path="/Registro" name="Register Page" element={<Register />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
