import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPageContainer";
import HomePage from "./containers/HomePageContainer";
import NoRouteFound from "./components/NoRouteFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NoRouteFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
