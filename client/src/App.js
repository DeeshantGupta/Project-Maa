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
import CTGScanResult from "./pages/CTGScanResult";
import Articles from "./pages/Articles";
import InfoDoctor from "./pages/Doctor/InfoDoctor";
import Pricing from "./pages/Pricing";
<<<<<<< HEAD
// import chatForum from "./components/jsx/chatForum/chatForum";
=======
import Food2 from "./pages/Food2";
import ChatForum from "./pages/ChatForum";
<<<<<<< HEAD
import ChatBot from "./pages/ChatBot";
// import ChatForum from "./components/jsx/chatForum/ChatForum";
=======
>>>>>>> 720892eda2e70889147ec5e36359fdb32c37f93f
>>>>>>> 5beb39304359a38736656d7327e78a0a2ee12acd

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
        <Route exact path="/foods" element={<Food2 />} />
        <Route exact path="/:id/symptoms" element={<Symptoms />} />
        <Route exact path="/user/:id/detailsone" element={<DetailsOne />} />
        <Route exact path="/:id/dashboard" element={<Dashboard />} />
        <Route exact path="/:id/checkups" element={<Checkups />} />
        <Route exact path="/calculator" element={<Calculator1 />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/signupdoctor" element={<SignUpDoctor />} />
        <Route exact path="/ctgscan" element={<CTGScan />} />
        <Route exact path="/ctgresult" element={<CTGScanResult />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/chatforum" element={<ChatForum />} />

<<<<<<< HEAD
        <Route exact path="/chatforum" element={<ChatForum/>} />
        <Route exact path="/chatbot" element={<ChatBot />} />
=======
<<<<<<< HEAD
        {/* <Route exact path="/chatforum" element={<chatForum/>} /> */}
=======
        <Route exact path="/:id/chatforum" element={<ChatForum/>} />
>>>>>>> 720892eda2e70889147ec5e36359fdb32c37f93f
>>>>>>> 5beb39304359a38736656d7327e78a0a2ee12acd

        {/* <Route exact path="/doctor/info/:id/*" element={<InfoDoctor />} /> */}
        <Route exact path="/doctor/info/*" element={<InfoDoctor />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
