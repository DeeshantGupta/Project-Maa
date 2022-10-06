import React from "react";
import "../components/css/Calculator1Styles.css";
import HeaderUser from "../components/jsx/HeaderUser";

const Calculator1 = () => {
  return (
    <div>
      <HeaderUser />

      <div className="main_container_calculator1">
        <div className="main_box_calculator1">
          <div className="top_section_calculator1">
            <p>
              Expecting a baby and want to know the arrival date? Use this
              pregnancy due date calculator to see the duedate by week, by
              month, and the pregnancy progress.
            </p>
          </div>

          <div className="middle_section_calculator1">
            <h4>Due date calculator</h4>
            <p>
              Estimate your due date using your last menstrual period,<br></br>{" "}
              conception date or date of your last ultrasound.
            </p>
          </div>

          <div className="bottom_section_calculator1"></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
