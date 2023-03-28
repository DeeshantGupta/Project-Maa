import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../img/logo.png";
// import Logo2 from "../../../img/logo-white.png";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg"
import "../../css/Doctor/Header2DoctorStyles.css";
import {useCookies} from 'react-cookie'
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Header2Doctor = (props) => {
    
      const initials = props.name

      const name_initials=typeof initials==="string" ?initials.split('')[0]:""
    
      const [click, setClick] = useState(false);
      const handleClick = () => setClick(!click);
      const [isLogoutMenu, setIsLogoutMenu] = useState(false);
    
    const navigate = useNavigate()
    
      const [removeCookie] = useCookies([])
    
      const LogOut = async()=>{
         removeCookie("jwt")
         navigate('/login')
         window.location.reload(true);
      }
    
      return (
        <div className="headerStudent">
          <div className="left_section_header2Doctor">
            {window.innerWidth < 940 ? (<CgMenuRight size={30} className="left_section_icon_header2Doctor" onClick={() => props.setIsOpenSidebar(!props.isOpenSidebar)} />
    ) : ""}
            {!props.isOpenSidebar && (
              <Link to="/">
            
                <img src={Logo} alt="pregrad" />
  
            </Link>
            )}
          </div>
    
          <div className={click ? "right_section_header2Doctor active" : "right_section_header2Doctor"}>
            <div className="menu_header2Doctor">
              <Link to="/" className="intern_header2Doctor">
                Home
              </Link>
    
              {/* <div className="theme_icon_container_header2Doctor" onClick={toggleTheme}>
                {
                  props.theme==="light-theme" ? <BsMoonFill className="theme_icon_header2Doctor" /> : <BsSunFill className="theme_icon_header2Doctor" />
                }
              </div> */}
    
              <div className="user_details_container_header2Doctor" onClick={() => setIsLogoutMenu(!isLogoutMenu)}>
                <div className="user_avavtar_header2Doctor">{name_initials}</div>
                <p>{props.name}</p>
                { isLogoutMenu ? <RiArrowDropUpLine size={29} className="user_avatar_logo_header2Doctor" /> : <RiArrowDropDownLine size={29} className="user_avatar_logo_header2Doctor" />}
              </div>
    
              { isLogoutMenu && (
                <div className="logout_container_header2Doctor">
                  <div className="logout_items_header2Doctor">
                    <a onClick={LogOut}>Logout <div> <MdLogout /></div></a>
                  </div>
             </div>
              ) }
            </div>
          </div>
    
          {/* <div className="hamburger">
              <div className="theme_icon_container2_header2Doctor" onClick={toggleTheme}>
                {
                  props.theme==="light-theme" ? <BsMoonFill className="theme_icon2_header2Doctor" /> : <BsSunFill className="theme_icon2_header2Doctor" />
                }
              </div>
    
            {click ? (
              <>
              <div className="user_avavtar_header2Doctor" onClick={handleClick}>{name_initials}</div>
              <div className="logout_container_header2Doctor">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                <a onClick={LogOut}>Logout <MdLogout /></a>
                </div>
             </div>
              </>
            ) : (
                <>
              <div className="user_avavtar_header2Doctor" onClick={handleClick}>{name_initials}</div>
              
             </>
            )}
          </div> */}
        </div>
      )
    }

export default Header2Doctor
