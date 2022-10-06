import React from 'react'
import "../components/css/DashboardStyles.css";
import HeaderUser from '../components/jsx/HeaderUser';
import Footer from "../components/jsx/Footer";
import Fruit from "../img/banner-images/fruit-image.png";
import Symptoms from "../img/banner-images/symptoms.png";
import Excercise from "../img/banner-images/excercise.png";
import Checkup from "../img/banner-images/checkup.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const image = "https://drive.google.com/file/d/1QtjuQz6Zb_xsUWZRIViGGX-dZtgijXgb/view?usp=sharing";
  return (
    <div>
      <HeaderUser />

      <div className='main_container_dashboard'>
        <div className='top_section_dashboard'>
            <div className='top_heading_section_dashboard'>
                <h2>Week 5</h2>
                <p>Your baby is as big as a pomegranate seed.</p>
            </div>

            <div className='top_detail_section_dashboard'>
                <div className='detail_first_section_dashboard'>
                    <img src="https://www.babycenter.com/ims/2015/01/pregnancy-week-5-amniotic-sac_4x3.jpg" alt="baby" />
                    <p>27 cm<br></br>0.31 - 0.35 kg</p>
                </div>

                <div className='detail_second_section_dashboard'>
                {/* https://drive.google.com/uc?id=1xD2WGWVlYRKccD4cXpsh4WT0vYAdUDR */}

                    <img src="https://drive.google.com/uc?id=1-8ZQhXwwFnwTxdBx5oEYz-w9Rlo4WXKn" alt="fruit size" />
                </div>

                <div className='detail_third_section_dashboard'>
                    <div className='third_top_section_dashboard'>
                        <p>37</p>
                    </div>
                    <p>37 Weeks Left</p>
                </div>
            </div>
        </div>

        <div className='middle_section_dashboard'>
          <div className='middle_upper_section_dashboard'>
            <h2>Body Requirements & Symptoms</h2>
            <p>We have designed these body requirements for you and your baby.</p>
          </div>

          <div className='cards_container_dashboard'>
            <Link to="/food">
            <div className='card_box_dashboard'>
              <div className='card_top_section_dashboard'>
                <h3>Fruits and Vegetables</h3>
              </div>
              <div className='card_bottom_section_dashboard'>
                <p></p>
              </div>
              <div className='card_image_section_dashboard'>
                <img src={Fruit} alt='fruits' />
              </div>
            </div>
            </Link>

            <Link to="/symptoms">
            <div className='card_box_dashboard'>
              <div className='card_top_section_dashboard'>
                <h3>Symptoms</h3>
              </div>
              <div className='card_bottom_section_dashboard'>
                <p></p>
              </div>
              <div className='card_image_section2_dashboard'>
                <img src={Symptoms} alt='fruits' />
              </div>
            </div>
            </Link>

            <Link to="/excercise">
            <div className='card_box_dashboard'>
              <div className='card_top_section_dashboard'>
                <h3>Excercises</h3>
              </div>
              <div className='card_bottom_section_dashboard'>
                <p></p>
              </div>
              <div className='card_image_section3_dashboard'>
                <img src={Excercise} alt='excercise' />
              </div>
            </div>
            </Link>

            <Link to="/checkups">
            <div className='card_box_dashboard'>
              <div className='card_top_section_dashboard'>
                <h3>Checkup & Scans</h3>
              </div>
              <div className='card_bottom_section_dashboard'>
                <p></p>
              </div>
              <div className='card_image_section4_dashboard'>
                <img src={Checkup} alt='checkup' />
              </div>
            </div>
            </Link>
          </div>
        </div>

        <div className='bottom_section_dashboard'>
          <h2>Tips for You This Week</h2>
          <div className='tip_container_dashboard'>
            <div className='tip_box_dashboard'>
              <h4>Ask about inducing labor</h4>
              <p>Baby is now officially late. Since your uterus is likely becoming less hospitable, if you don't go into labor on your own, your practitioner will likely schedule you to be induced sometime this week. Whether you have an induction, or baby makes an arrival without help, you'll have to be tested for COVID-19 before delivering.</p>
            </div>

            <div className='tip_box_dashboard'>
              <h4>Ask about inducing labor</h4>
              <p>Baby is now officially late. Since your uterus is likely becoming less hospitable, if you don't go into labor on your own, your practitioner will likely schedule you to be induced sometime this week. Whether you have an induction, or baby makes an arrival without help, you'll have to be tested for COVID-19 before delivering.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
