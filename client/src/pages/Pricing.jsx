import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Header from '../components/jsx/Header';
import PricingImg from "../img/pricing.png";
import "../components/css/PricingStyles.css"

const Pricing = () => {
  return (

      <div className='main_container_pricing'>
        <Header />
        <div className='main_img_pricing'>
            <img src={PricingImg} alt="pricing" />
        </div>
        {/* <div className='main_box_pricing'>
            <div className='main_block_pricing'>
                <div className='top_section_pricing'>
                    <h2>Our Services Has <br></br>Friendly Packages</h2>
                    <p>Choose plans that might better for your company</p>
                </div>
                <div className='middle_section_pricing'>
                    <div className='middle_first_container_pricing'>
                        <div className='first_upper_pricing'>
                            <h3>STARTER</h3>
                            <h2>&#x20B9;125.00 <span>/ year</span></h2>
                        </div>
                        <div className='line_pricing'></div>
                        <div className='first_middle_pricing'>
                            <div className='first_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='first_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='first_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='first_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>
                        </div>

                        <div className='first_lower_pricing'>
                            <button className='primary_btn_pricing'>Go Starter</button>
                        </div>
                    </div>

                    <div className='middle_second_container_pricing'>
                        <div className='second_upper_pricing'>
                            <h3>STARTER</h3>
                            <h2>&#x20B9;125.00 <span>/ year</span></h2>
                        </div>
                        <div className='line_pricing'></div>
                        <div className='second_middle_pricing'>
                            <div className='second_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='second_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='second_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>

                            <div className='second_middle_box_pricing'>
                                <IoIosCheckmarkCircle />
                                <p></p>
                            </div>
                        </div>

                        <div className='second_lower_pricing'>
                            <button className='primary_btn_pricing'>Go Starter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </div>

  )
}

export default Pricing
