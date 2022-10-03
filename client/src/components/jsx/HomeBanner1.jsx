import React from "react";
import Header from "./Header";
import "../css/HomeBanner1Styles.css";
import CoverPhoto from "../../img/cover-photo.png";
import BackgroundImage from "../../img/cover-background.png";

const HomeBanner1 = () => {
  return (
    <div>
      <div className="main_container_homebanner1">
        <Header />
        <div className="detail_section_homebanner1">
          <div className="detail_left_section_homebanner1">
            <h6>#Your9MonthsMatter</h6>
            <h2>We take care of your child as if they are our own.</h2>
            <p>Welcome to our app. We will make sure
              that your baby is always healthy and cheerful.</p>

            <button className="btn_primary_homebanner1">Make Appointment</button>
            <button className="btn_light_homebanner1">Get Started</button>
          </div>

          <div className="detail_right_section_homebanner1">
            <img src={CoverPhoto} alt="cover photo" />
          </div>
        </div>
        <div className="background_image_container_homebanner1">
            <img src={BackgroundImage} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner1;
