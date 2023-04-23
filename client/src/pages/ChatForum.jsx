import React, { useState } from "react";
import "../components/css/ChatForumStyles.css";
import { AiFillMessage, AiFillSetting } from "react-icons/ai";
import { BsBarChartFill, BsClock, BsCalendarDateFill, BsMegaphoneFill, BsFillQuestionCircleFill, BsSliders, BsThreeDots, BsTable, BsEmojiSmile } from "react-icons/bs";
import { FaBars, FaBell, FaReact } from "react-icons/fa";
import { TbBrandMeta, TbMessageDots } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { IoDocuments, IoSearchOutline, IoSend } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import ParentComment from "../components/jsx/ParentComment";

const ChatForum = () => {
    const [myself, setMyself] = useState(true);

  return (
    <div>
      <div className="main_container_message">
        <div className="first_section_message">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link> 
          {/* <TbBrandMeta className="meta_icon_message" /> */}
          <div className="logo_container_message">D</div>
          <div className="sidebar_icons_container_message">
            <HiHome className="sidebar_icon_message" />
            <FaBell className="sidebar_icon_message" />
            <AiFillMessage className="sidebar_icon_message" />
            <BsCalendarDateFill className="sidebar_icon_message" />
            <BsMegaphoneFill className="sidebar_icon_message" />
            <BsBarChartFill className="sidebar_icon_message" />
            <FaBars className="sidebar_icon_message" />
            <IoDocuments className="sidebar_icon_message" />
          </div>
          <div className="sidebar_bottom_icons_container_message">
            <BsFillQuestionCircleFill className="sidebar_icon_message" />
            <MdFeedback className="sidebar_icon_message" />
          </div>
        </div>

        <div className="second_section_message">
          <div className="second_top_section_message">
            <div className="second_top_left_section_message">
              <h3>Inbox</h3>
            </div>

            <div className="second_top_right_section_message">
              <button className="btn_primary_message">
                <BsClock className="clock_icon_message" />
                <p>Available</p>
              </button>

              <button className="btn_primary_message">
                <FaReact className="react_icon_message" />
                <p>Automations</p>
              </button>

              <button className="btn2_primary_message">
                <AiFillSetting className="settings_icon_message" />
              </button>
            </div>
          </div>

          <div className="chat_container_message">

            <div className="chat_main_box_message">

              {/* CHAT WINDOW */}
              {/* {SenderProfile.forEach((element) => {
                if (element.conversation_id === conversationId) {
                  selectedConversation = element;
                  ps_id = element.id;
                }
              })} */}

              {/* {selectedConversation && ( */}
                <div className="chat_window_container_message">

                  <div className="message_section_message">
                    <div className="message_top_section_message">
                      {/* <p>1:50 AM</p> */}
                    </div>

                    <div className="message_middle_section_message">
                            <ParentComment myself="true"  />
                            <ParentComment myself="false"  />
                    </div>

                    <div className="message_bottom_section_message">
                      <div className="input_container_message">
                        <div className="input_top_section">
                          <input
                            // onChange={handleMessage}
                            // value={inputMessage}
                            type="text"
                            placeholder="Reply in Messenger..."
                          />
                          <IoSend
                            // onClick={() => submitMessage(ps_id)}
                            className="send_icon_message"
                          />
                        </div>

                        <div className="input_bottom_section">
                          <div className="input_bottom_icon_container_message">
                            <ImAttachment className="attach_icon_message" />
                          </div>
                          <div className="input_bottom_icon_container_message">
                            <TbMessageDots className="attach_icon_message" />
                          </div>
                          <div className="input_bottom_icon_container_message">
                            <BsEmojiSmile className="attach_icon_message" />
                          </div>
                          <div className="input_bottom_icon_container_message">
                            <BsTable className="attach_icon_message" />
                          </div>
                          <div className="input_bottom_icon_container_message">
                            <IoMdThumbsUp className="attach_icon_message" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* )} */}
            </div>
          </div>
        </div>

        <div className="third_section_message">
          <div className="third_section_box_message"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatForum;
