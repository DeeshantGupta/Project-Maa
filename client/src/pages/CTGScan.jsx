import React, { useState } from 'react'
import HeaderUser from '../components/jsx/HeaderUser';
import "../components/css/CTGScanStyles.css";
import CTGImage from "../img/banner-images/ctgscan1.png";
import Healthy from "../img/banner-images/goodhealth.png"
import Risk from "../img/banner-images/badhealth.png"

const CTGScan = () => {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isResult, setIsResult] = useState(false);
   
  
    const handleForm = (e) => {
      const {name, value} = e.target;
      setUser({
        ...user,
        [name]: value
      })
    }
  
    const submitForm = (e) => {
      e.preventDefault();
    //   setFormErrors(validate(user));
    console.log(user)
      setIsSubmit(true);
    }
  
    const validate = (values) => {
      
      const errors = {};
  
      const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if(!values.name){
        errors.name = "Name required";
      }else if(values.name.length < 2){
        errors.name = "Minimum 2 characters required";
      }else if(values.name.length > 18){
        errors.name = "Maximum 18 characters required";
      }
  
      if(!values.email){
        errors.email = "Email required";
      }else if(!regex.test(values.email)){
        errors.email = "Incorrect Email Format";
      }
  
      if(!values.description){
        errors.description = "Description required"
      }
  
      return errors;
    }

    const [user, setUser] = useState({
        baselineValue: "",
        accelerations: "",
        fetalMovement: "",
        uterineContractions: "",
        lightDecelerations: "",
        severeDecelerations: "",
        prolonguedDecelerations: "",
        shortTermVariability: "",
        meanShortTermVariability: "",
        percentageLongTermVariability: "",
        meanLongTermVariability: "",
        histogramWidth: "",
        histogramMin: "",
        histogramMax: "",
        histogramPeaks: "",
        histogramZeroes: "",
        histogramMode: "",
        histogramMean: "",
        histogramMedian: "",
        histogramVariance: "",
        histogramTendency: "",
      });

  return (
    <div>
        <HeaderUser />
      <div className='main_container_ctgscan'>
        <div className='main_box_ctgscan'>
            <div className='left_section_ctgscan'>
                <img src={CTGImage} alt='ctg' />
            </div>


            {isResult ? (
            <div className='result_section_ctgscan good_ctgscan'>
                <div className='result_box_ctgscan'>
                    <div className='circle_result_container_ctgscan good_health_ctgscan'>
                        <img src={Healthy} alt='health' />
                        <p>Your's baby health and development is good.</p>
                    </div>
                </div>
            </div>
            ): (
                <div className='right_section_ctgscan'>
                <div className='right_top_section_ctgscan'>
                    <h2>CTG Reports (Doctor Pannel)</h2>
                    <h3>Let's protect your baby by pre-analysing his health.</h3>
                </div>
                <div className='right_middle_section_ctgscan'>
                    <div className="form-main-box_signup">
                        <div className="form-box_signup">
                            <label>Baseline Value</label>
                            <input type="text" name="baselineValue" placeholder="Baseline Value" value={user.baselineValue} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Accelerations</label>
                            <input type="text" name="accelerations" placeholder="Accelerations per second" value={user.accelerations} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Fetal Movement</label>
                            <input type="text" name="fetalMovement" placeholder="Fetal Movement per second" value={user.fetalMovement} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Uterine Contractions</label>
                            <input type="text" name="uterineContractions" placeholder="Uterine Contractions" value={user.uterineContractions} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Light Decelerations</label>
                            <input type="text" name="lightDecelerations" placeholder="Light Decelerations" value={user.lightDecelerations} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Severe Decelerations</label>
                            <input type="text" name="severeDecelerations" placeholder="Severe Decelerations" value={user.severeDecelerations} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Prolongued Decelerations</label>
                            <input type="text" name="prolonguedDecelerations" placeholder="Prolongued Decelerations" value={user.prolonguedDecelerations} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Abnormal Short Term Variability</label>
                            <input type="text" name="shortTermVariability" placeholder="Abnormal Short Term Variability" value={user.shortTermVariability} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Mean Short Term Variability</label>
                            <input type="text" name="meanShortTermVariability" placeholder="Mean Short Term Variability" value={user.meanShortTermVariability} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Percentage Long Term Variability</label>
                            <input type="text" name="percentageLongTermVariability" placeholder="Percentage Long Term Variability" value={user.percentageLongTermVariability} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Mean Long Term Variability</label>
                            <input type="text" name="meanLongTermVariability" placeholder="Mean Long Term Variability" value={user.meanLongTermVariability} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Width</label>
                            <input type="text" name="histogramWidth" placeholder="Histogram Width" value={user.histogramWidth} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Minimum</label>
                            <input type="text" name="histogramMin" placeholder="Histogram Minimum" value={user.histogramMin} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Maximum</label>
                            <input type="text" name="histogramMax" placeholder="Histogram Maximum" value={user.histogramMax} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Number of Peaks</label>
                            <input type="text" name="histogramPeaks" placeholder="Histogram Number of Peaks" value={user.histogramPeaks} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Number of Zeroes</label>
                            <input type="text" name="histogramZeroes" placeholder="Histogram Number of Zeroes" value={user.histogramZeroes} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Mode</label>
                            <input type="text" name="histogramMode" placeholder="Histogram Mode" value={user.histogramMode} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Mean</label>
                            <input type="text" name="histogramMean" placeholder="Histogram Mean" value={user.histogramMean} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Median</label>
                            <input type="text" name="histogramMedian" placeholder="Histogram Median" value={user.histogramMedian} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Variance</label>
                            <input type="text" name="histogramVariance" placeholder="Histogram Variance" value={user.histogramVariance} onChange={handleForm} />
                        </div>

                        <div className="form-box_signup">
                            <label>Histogram Tendency</label>
                            <input type="text" name="histogramTendency" placeholder="Histogram Tendency" value={user.histogramTendency} onChange={handleForm} />
                        </div>
                    </div>

                    <div className='submit_btn_section_ctgscan'>
                        <button className='primary_button_ctgscan' onClick={submitForm}>Analyse Result</button>
                    </div>
                </div>
            </div>
            )}
            


            
        </div>
      </div>
    </div>
  )
}

export default CTGScan;
