import React from 'react';
import "../css/FooterStyles.css";
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { MdAccessTimeFilled } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="main_container_footer">
        <div className='left_section_footer'>
            <img src={Logo} alt="logo" />
            <div className='left_section_lists_footer'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/home">Contact</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>

        <div className='middle_section_footer'>
            <h2>Follow Us At</h2>
            <div className='middle_section_lists_footer'>
                <ul>
                    <li><a href='#'><FaFacebookSquare className="icons_footer" />maatritoyou</a></li>
                    <li><a href='#'><AiFillInstagram className="icons_footer" />@maatriofficial</a></li>
                    <li><a href='#'><SiGmail className="icons_footer" />maatri@gmail.com</a></li>
                    <li><a href='#'><BsTwitter className="icons_footer" />maatrionline</a></li>
                </ul>
            </div>
        </div>

        <div className='right_section_footer'>
            <h2>Address</h2>
            <div className='right_section_lists_footer'>
                <ul>
                    <li><HiHome className="icons_footer" />G - 7, Noida Sector - 70, India</li>
                    <li><BsFillTelephoneFill className="icons_footer" />+ 91 9654231456</li>
                    <li><MdAccessTimeFilled className="icons_footer" />8:00 a.m. - 9:00 p.m.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
