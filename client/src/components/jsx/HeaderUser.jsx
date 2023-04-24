import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import "../css/HeaderUserStyles.css";
import {useCookies} from 'react-cookie'
import axios from "axios"
const HeaderUser = ({name}) => {
  const navigate = useNavigate();

  const initials = name
  const name_initials=typeof initials==="string" ?initials.split('')[0]:""

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isLogoutMenu, setIsLogoutMenu] = useState(false);

  const [cookies,setCookies,removeCookie] = useCookies([])

  const LogOut = async()=>{
    console.log(cookies.session)
    removeCookie("jwt")
    navigate('/login')
    window.location.reload(true);

  }

  return (
    <div className="headerUser">
      <div className="left_section_headerUser">
        <Link to="/">
            <img src={Logo} alt="logo" />
            <p><span className="hindi_header">माँ</span><span className="english_header">tri</span></p>
        </Link>
      </div>

      <div className={click ? "right_section_headerUser active_headerUser" : "right_section_headerUser"}>
        <div className="menu_headerUser">
          <Link to="/" className="intern_headerUser">
            Home
          </Link>

          <Link to="/chatforum">Chat Forum</Link>

          <div className="user_details_container_headerUser" onClick={() => setIsLogoutMenu(!isLogoutMenu)}>
            <div className="user_avavtar_headerUser">{name_initials}</div>
            <p>{name}</p>
            { isLogoutMenu ? <RiArrowDropUpLine size={29} className="dropdown_menu_headerUser" /> : <RiArrowDropDownLine size={29} className="dropdown_menu_headerUser" />}
          </div>

          { isLogoutMenu && (
            <div className="logout_container_headerUser">
            <a onClick={LogOut}>Logout <MdLogout /></a>
         </div>
          ) }
        </div>
      </div>

      <div className="hamburger">
        {click ? (
          <>
          <div className="user_avavtar_headerUser" onClick={handleClick}>{name_initials}</div>
          <div className="logout_container_headerUser">
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
          <div className="user_avavtar_headerUser" onClick={handleClick}>{name_initials}</div>
          
         </>
        )}
      </div>
    </div>
  );
};

export default HeaderUser;
