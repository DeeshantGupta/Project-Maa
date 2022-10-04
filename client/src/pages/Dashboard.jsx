import React from 'react'
import "../components/css/DashboardStyles.css";
import HeaderUser from '../components/jsx/HeaderUser';
import Fruit from "../img/banner-images/fruit-image.png";
import Symptoms from "../img/banner-images/symptoms.png"

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

                    <img src="https://drive.google.com/uc?id=1nRECmAxancPuVp9v2kPRD4IeNMFiGj3f" alt="fruit size" />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard