import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmailVerify from "./pages/EmailVerify";
import Error404 from "./pages/Error404";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import OTPVerify from "./pages/OTPVerify";
import SignUp from "./pages/SignUp";

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />  
        <Route exact path="/emailverify/:type" element={<EmailVerify />} />  
        <Route exact path="/otpverify/:email/:type" element={<OTPVerify />} /> 
        <Route exact path="/forgotpassword/:email" element={<ForgotPassword />} />        
        <Route exact path="*" element={<Error404 />} />
 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
