import React from "react";
import { Link } from "react-router-dom";
import "../css/HomeBanner6Styles.css"

const HomeBanner6 = () => {
  return (
    <div>
      <div className="main_container_homebanner6">
        <div className="top_section_homebanner6">
          <h2>Pregnancy Calculators</h2>
          <p>Estimate important pregnancy dates accurately.</p>
        </div>

        <div className="bottom_section_homebanner6">
            <img src="https://www.drvarshaliclinic.com/assets/images/pages/learn/pregnancy/pregnancy-due-date-calculator/calendar-icon-white-due-date-calculator-dr-varshali-mali-gynecologist.svg" alt="calc" />
            <h5>Pregnancy due date</h5>
            <h6>Accurate estimation of your baby's arrival !!</h6>
            <p>Estimate your due date using your last menstrual period,<br></br>{" "}
              conception date or date of your last ultrasound.</p>
            <Link to="/calculator" className="btn_primary_homebanner6">Calculate due date</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner6;
