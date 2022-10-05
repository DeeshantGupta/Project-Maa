import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailsOne from "./pages/DetailsOne";
import EmailVerify from "./pages/EmailVerify";
import Error404 from "./pages/Error404";
import Food from "./pages/Food";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OTPVerify from "./pages/OTPVerify";
import SignUp from "./pages/SignUp";
import Symptoms from "./pages/Symptoms";

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />  
        <Route exact path="/emailverify/:type" element={<EmailVerify />} />  
        <Route exact path="/otpverify/:email/:type" element={<OTPVerify />} /> 
        <Route exact path="/forgotpassword/:email" element={<ForgotPassword />} />        
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/student/detailsone" element={<DetailsOne />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/food" element={<Food />} />
        <Route exact path="/symptoms" element={<Symptoms />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
