import React, { useState, useEffect } from "react";
import "../components/css/Calculator1Styles.css";
import HeaderAuth from "../components/jsx/HeaderAuth";
import HeaderUser from "../components/jsx/HeaderUser";
import BabyImage from "../img/banner-images/baby-sleep.png";

const Calculator1 = () => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const cycleLengthData = ["28 days", "29 days", "30 days", "31 days", "32 days", "33 days",]
  const [selectedCycleLength, setSelectedCycleLength] = useState("");
 
  const handleCycleLength = (event) => {
    setSelectedCycleLength(event.target.value);
  }

  const [user, setUser] = useState({
    date: "",
    cyclelength: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  };

  var result = new Date();
  const [resultDay, setResultDay] = useState("");
  const [resultDate, setResultDate] = useState("");
  const [resultMonth, setResultMonth] = useState("");
  const [resultYear, setResultYear] = useState("");
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday']
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const calculateDate = () => {
        const currentDate = new Date(user.date);
        
        result.setDate(currentDate.getDate() + 280)
        console.log(result)

        setResultDay(days[result.getDay()])
        setResultDate(result.getDate())
        setResultMonth(months[result.getMonth()])
        setResultYear(result.getFullYear())
        setIsCalculated(true)
      }

      calculateDate();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.date) {
      errors.date = "Date required";
    }

    if(!selectedCycleLength){
      errors.cyclelength = "Cycle length required"
  }

    return errors;
  };

  return (
    <div>
      <HeaderAuth />

      <div className="main_container_calculator1">
        <div className="main_box_calculator1">
          <div className="top_section_calculator1">
            <p>
              Expecting a baby and want to know the arrival date? Use this
              pregnancy due date calculator to see the duedate by week, by
              month, and the pregnancy progress.
            </p>
          </div>

          {isCalculated ? (
            <div className="calculated_container_calculator1">
              <h2>Your due date is <span>{resultDay}, {resultDate} {resultMonth} {resultYear}.</span></h2>
              <div className="calculated_box_calculator1">
                <img src={BabyImage} alt="baby" />
                <p>{resultMonth}<br></br><span>{resultDate}</span><br></br>{resultYear}</p>
              </div>
            </div>
          )
          : (
            <div>
          <div className="middle_section_calculator1">
            <h4>Due date calculator</h4>
            <p>
              Estimate your due date using your last menstrual period,<br></br>{" "}
              conception date or date of your last ultrasound.
            </p>
          </div>

          <div className="bottom_section_calculator1">
            <div className="form_box_calculator1">
              <label>The first day of your last period*</label>
              <input
                type="date"
                name="date"
                placeholder="Select Date"
                value={user.date}
                onChange={handleForm}
              />
              <p className="errors-msg_calculator1">{formErrors.date}</p>
            </div>

            <div className="form_box_calculator1">
                 <label>Enter Period Cycle Length*</label>
                 <select onChange={handleCycleLength} className="select_calculator1">
                  <option value="" disabled selected hidden>Enter Period Cycle Length</option> 
                  {cycleLengthData.map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                 </select>
                 <p className="errors-msg_calculator1">{formErrors.cyclelength}</p>
              </div>

              <button onClick={submitForm} className="btn_primary_calculator1">Calculate my due date</button>
          </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
