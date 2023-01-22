import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calculator1 from "./pages/Calculator1";
import Checkups from "./pages/Checkups";
import Dashboard from "./pages/Dashboard";
import DetailsOne from "./pages/DetailsOne";
import EmailVerify from "./pages/EmailVerify";
import Error404 from "./pages/Error404";
import Features from "./pages/Features";
import Food from "./pages/Food";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OTPVerify from "./pages/OTPVerify";
import Products from "./pages/Products";
import SignUpDoctor from "./pages/SignUpDoctor";
import SignUp from "./pages/SignUp";
import Symptoms from "./pages/Symptoms";
import CTGScan from "./pages/CTGScan";

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
        <Route exact path="/:id/food" element={<Food />} />
        <Route exact path="/:id/symptoms" element={<Symptoms />} />
        <Route exact path="/user/:id/detailsone" element={<DetailsOne />} />
        <Route exact path="/:id/dashboard" element={<Dashboard />} />
        <Route exact path="/:id/checkups" element={<Checkups />} />
        <Route exact path="/calculator" element={<Calculator1 />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/signupdoctor" element={<SignUpDoctor />} />
        <Route exact path="/ctgscan" element={<CTGScan />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
