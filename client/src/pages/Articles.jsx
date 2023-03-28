import React from 'react'
import Header from '../components/jsx/Header';
import "../components/css/Articles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";


const Articles = () => {
  return (
    <div className='main_container_articles'>
      <Header />
      <div className='main_container_article'>
        <h1>Blogs for Mothers</h1>
        <div className="main_bottom_section_homebanner6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              460: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              658: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            loop="false"
            className="mySwiper"
          >
           
            <SwiperSlide className="swiper_homebanner6">
          <a href="https://www.medicalnewstoday.com/articles/316367" target="_blank" rel="noreferrer">
             <div className="course_box_homebanner6">
              <div className="course_box_upper_section_homebanner6">
                <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316367/a-pregnant-woman-using-a-computer.jpg" alt="course" />
                <div className="course_details_homebanner6">
                  <h2>Six of the best pregnancy tips for parents</h2>
                  <h3>By Hannah Nichols </h3>
                  <p> March 15, 2017</p>
                </div>

              </div>
            </div>    
              </a>
            </SwiperSlide>
          
            

            <SwiperSlide className="swiper_homebanner6">
          <a href="https://www.webmd.com/baby/features/pregnancy-101-things-mom-never-told-you" target="_blank" rel="noreferrer">
             <div className="course_box_homebanner6">
              <div className="course_box_upper_section_homebanner6">
                <img src="https://cdn.cdnparenting.com/articles/2018/08/19185655/Pregnancy-Must-Haves.webp" alt="course" />
                <div className="course_details_homebanner6">
                  <h2>Things Mom Never Told You</h2>
                  <h3>By Julie Watson </h3>
                  <p> July 12, 2022</p>
                </div>

              </div>
            </div>    
              </a>
            </SwiperSlide>



            <SwiperSlide className="swiper_homebanner6">
          <a href="https://www.themotherbabycenter.org/blog/2022/06/pregnancy-tips-for-first-time-moms/" target="_blank" rel="noreferrer">
             <div className="course_box_homebanner6">
              <div className="course_box_upper_section_homebanner6">
                <img src="https://www.themotherbabycenter.org/assets/img/m1284_crt_mbc_tmbc_social_organic_q1_tw_8-768x432.png" alt="course" />
                <div className="course_details_homebanner6">
                  <h2>Advice & pregnancy tips for first-time moms</h2>
                  <h3>By Emma Ponting </h3>
                  <p> June 23, 2021</p>
                </div>

              </div>
            </div>    
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Articles
