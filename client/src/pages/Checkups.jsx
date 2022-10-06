import React from "react";
import "../components/css/CheckupsStyles.css";
import HeaderUser from "../components/jsx/HeaderUser";
import Footer from "../components/jsx/Footer";

const Checkups = () => {
  return (
    <div>
      <HeaderUser />

      <div className="main_container_checkups">
        <div className="top_section_checkups">
          <h2>Checkups, Scans and Tests</h2>
        </div>

        <div className="checkup_container_checkups">
            <div className="checkup_box_checkups">
                <div className="checkup_left_section_checkups">
                    <h2>Dating Ultrasound Pregnancy Scan</h2>
                    <p>It is recommended to undergo a 'dating ultrasound pregnancy scan' during the early stage of pregnancy. This scan confirms the pregnancy and accurately dates it.</p>
                </div>

                <div className="checkup_right_section_checkups">
                    <img src="https://www.drvarshaliclinic.com/assets/images/pages/blog/2018/07-Jul/pregnancy-checkup-and-scan-schedule/pregnancy-checkup-and-scan-ultrasound-probe-icon-pink.svg" alt="checkup" />
                </div>
            </div>

            <div className="checkup_box2_checkups">
                <div className="checkup_left_section_checkups">
                    <h2>Dating Ultrasound Pregnancy Scan</h2>
                    <p>Tdap vaccine is a combination vaccine that gives triple protection against three bacterial infections. A single shot of this pregnancy vaccination, it protects you from Tetanus, diphtheria, and Pertussis.Pertussis is a highly contagious respiratory infection, commonly known as Whooping Cough.dap vaccine additionally protects against Pertussis, especially in newborns, </p>
                </div>

                <div className="checkup_right_section_checkups">
                    <img src="https://www.drvarshaliclinic.com/assets/images/pages/blog/2018/07-Jul/pregnancy-checkup-and-scan-schedule/pregnancy-checkup-and-scan-ultrasound-probe-icon-pink.svg" alt="checkup" />
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkups;
