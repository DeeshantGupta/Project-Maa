import React from "react";
import "../components/css/SymptomsStyles.css";
import HeaderUser from "../components/jsx/HeaderUser";

const Symptoms = () => {
  return (
    <div>
      <HeaderUser />

      <div className="main_container_symptoms">
        <div className="top_section_symptoms">
          <h2>Pregnancy Symptoms Week 42</h2>
        </div>

        <div className="symptoms_container_symptoms">
            <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src="https://images.agoramedia.com/wte3.0/gcms/pregnancy-wbw-symptoms-braxton-hicks.jpg?width=150" alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>More frequent Braxton Hicks contractions</h4>
                    <p>At this late stage in the game you’ll likely be feeling more frequent Braxton Hicks contractions — aka “practice” contractions that make your uterus feel hard — as your body gets ready for labor. If you start to notice a regular pattern to the contractions, they may be the real thing.</p>
                </div>
            </div>

            <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src="https://images.agoramedia.com/wte3.0/gcms/pregnancy-wbw-symptoms-braxton-hicks.jpg?width=150" alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>More frequent Braxton Hicks contractions</h4>
                    <p>At this late stage in the game you’ll likely be feeling more frequent Braxton Hicks contractions — aka “practice” contractions that make your uterus feel hard — as your body gets ready for labor. If you start to notice a regular pattern to the contractions, they may be the real thing.</p>
                </div>
            </div>
        </div>



        {/* Baby Changes */}
        <div className="top_section_symptoms">
          <h2>Baby Changes Week 42</h2>
        </div>

        <div className="symptoms_container_symptoms">
            <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src="https://images.agoramedia.com/wte3.0/gcms/pregnancy-wbw-symptoms-braxton-hicks.jpg?width=150" alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>More frequent Braxton Hicks contractions</h4>
                    <p>At this late stage in the game you’ll likely be feeling more frequent Braxton Hicks contractions — aka “practice” contractions that make your uterus feel hard — as your body gets ready for labor. If you start to notice a regular pattern to the contractions, they may be the real thing.</p>
                </div>
            </div>

            <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src="https://images.agoramedia.com/wte3.0/gcms/pregnancy-wbw-symptoms-braxton-hicks.jpg?width=150" alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>More frequent Braxton Hicks contractions</h4>
                    <p>At this late stage in the game you’ll likely be feeling more frequent Braxton Hicks contractions — aka “practice” contractions that make your uterus feel hard — as your body gets ready for labor. If you start to notice a regular pattern to the contractions, they may be the real thing.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
