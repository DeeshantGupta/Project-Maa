import React from 'react';
import "../css/HomeBanner2Styles.css";
import Doctor from "../../img/banner-images/banner2a.jpeg";
import BabyGrowth from "../../img/banner-images/banner2b.jpeg";
import Labs from "../../img/banner-images/banner2c.jpg";
import Appointments from "../../img/banner-images/banner2d.jpeg";
import Chat from "../../img/banner-images/banner2e.jpeg";
import Products from "../../img/banner-images/banner2f.jpg";


const HomeBanner2 = () => {
  return (
    <div>
      <div className='main_container_homebanner2'>
        <div className='top_section_homebanner2'>
            <h2>What we offer ?</h2>
            <p>We provide oppurtunity for everyone to recieve qualitative medical help.</p>
        </div>

        <div className='bottom_section_homebanner2'>
            <div className='card_container_homebanner2'>
                <img src={Doctor} alt='' />
                <h2>Doctor Consultation</h2>
                <p>We always places patients at the center of our attention, and concentrate on improving their experience with the aid of technologies.</p>
            </div>

            <div className='card_container_homebanner2'>
                <img src={BabyGrowth} alt='' />
                <h2>Growth Monitoring</h2>
                <p>We offer regular growth monitoring and promotion sessions (GMP) to make sure the baby is growing well.</p>
            </div>

            <div className='card_container_homebanner2'>
                <img src={Labs} alt='' />
                <h2>Tests, Checkups and Scans</h2>
                <p>A timely health assessment gives you a clear picture of your current health condition and also to determine future health risks.</p>
            </div>

            <div className='card_container_homebanner2'>
                <img src={Appointments} alt='' />
                <h2>Appointments</h2>
                <p>Access consultation with India’s top doctors on our website. Connect with doctors online, available 24/7, from the comfort of your home.</p>
            </div>

            <div className='card_container_homebanner2'>
                <img src={Chat} alt='' />
                <h2>Real Time Chat</h2>
                <p>We provide Real-time chat for your concern doubts and instant connection with our specialised doctors.</p>
            </div>

            <div className='card_container_homebanner2'>
                <img src={Products} alt='' />
                <h2>Products and Facilities</h2>
                <p>Shop Online newborn baby products and accessories like skin & oral care products, also for mothers care.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner2
