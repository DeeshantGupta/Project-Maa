import React from 'react';
import "../components/css/FeaturesStyles.css";
import Header from '../components/jsx/Header';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="main_container_features">
        <div className="top_section_features">
          <h2>Baby Care</h2>
          <button className='btn_primary_features' onClick={() => navigate("/products")}>Know More</button>
        </div>

        <div className="top_section_features">
          <h2>Register as a Doctor</h2>
          <button className='btn_primary_features' onClick={() => navigate("/signupdoctor")}>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default Features
