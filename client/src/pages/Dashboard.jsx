import React from 'react'
import "../components/css/DashboardStyles.css";
import HeaderUser from '../components/jsx/HeaderUser';
import Footer from "../components/jsx/Footer";
import Fruit from "../img/banner-images/fruit-image.png";
import Symptoms from "../img/banner-images/symptoms.png";
import Excercise from "../img/banner-images/excercise.png";
import Checkup from "../img/banner-images/checkup.png";
import { Link ,useNavigate , useParams} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect,useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import Logo from "../img/logo.png"
import {
  BsRobot,
  BsTable,
  BsEmojiSmile,
} from "react-icons/bs";
import { FaBars, FaBell, FaReact, FaRobot, FaTimes } from "react-icons/fa";
import { TbBrandMeta, TbMessageDots } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { IoDocuments, IoSearchOutline, IoSend } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import axios from "axios";

const Dashboard = () => {

  

  const callNumber = () => {
    console.log("Call")
    axios.post(`http://localhost:5000/user/call`).then(({data}) => {
      console.log(data);
    }).catch(err => console.log(err)) ;
  // 

  }


    const image = "https:drive.google.com/file/d/1QtjuQz6Zb_xsUWZRIViGGX-dZtgijXgb/view?usp=sharing";

    const navigate = useNavigate();

    const {id} = useParams();
  
    const [cookies,setCookie,removeCookie] = useCookies([]);

    const [userInfo,setUserInfo] = useState({});

    const [motherChild,setMotherChild] = useState([]);

    const [motherTips,setMotheTips] = useState({});

    const [showChat, setShowChat] = useState(true);

    const getUser = async()=>{
      axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
        setUserInfo(data);
      }) 
    }

    const motherChildInfo = async()=>{
      axios.get(`http://localhost:5000/user/motherchildinfo/${id}`).then(({data})=>{
        setMotherChild(data.info);
      }); 
    }

    const tipsMother = async()=>{
      axios.get(`http://localhost:5000/user/motherfood/${id}`).then(({data})=>{
        setMotheTips(data);
    }); 
    }

    
    const [inputMessage, setInputMessage] = useState("");

    const handleMessage = (e) => {
      setInputMessage(e.target.value);
    }

    const submitMessage = () => {
      console.log(inputMessage)
      axios.post(`http://127.0.0.1:8000/bot/${inputMessage}`).then((res) => {
        console.log(res)
      }).catch((err) => console.log(err))
    }

    useEffect(()=>{
      
      const verifyUser = ()=>{
        if(!cookies.jwt){
          navigate('/login');
        }else{
          axios.post(`http://localhost:5000/user/checkuser`,{},{
            withCredentials:true,
          }).then(({data})=>{
            if(data.id != id){
              removeCookie("jwt");
              navigate('/login');
            }else{
             
               getUser();
               motherChildInfo();
               tipsMother();
            }
          })
        }
      }
    
      verifyUser() ;
    
    },[cookies,navigate,removeCookie]);

  return (
    <div>
      <HeaderUser name={userInfo.name}/>
      {
       (motherChild.length != 0)?
        <div className='main_container_dashboard'>
         <div className='top_section_dashboard'>
             <div className='top_heading_section_dashboard'>
                 <h2>Week {motherChild[0].week}</h2>
                 <p>{motherChild[0].title}</p>
             </div>

             <div className='top_detail_section_dashboard'>
                 <div className='detail_first_section_dashboard'>
                     <img src={motherChild[0].baby_growth} alt="baby" />
                     {
                       (motherChild[0].size == "")?"":  <p>{motherChild[0].size}</p>
                     }
                     {
                       (motherChild[0].weight == "")?"":  <p>{motherChild[0].weight}</p>
                     }
                 </div>

                 <div className='detail_second_section_dashboard'>
                     <img src={motherChild[0].baby_lookslike} alt="fruit size" />
                 </div>

                 <div className='detail_third_section_dashboard'>
                     <div className='third_top_section_dashboard'>
                         <p>{42 - motherChild[0].week}</p>
                     </div>
                     <p>{42 - motherChild[0].week} Weeks Left</p>
                 </div> 
             </div>
         </div>

         <div className='middle_section_dashboard'>
           <div className='middle_upper_section_dashboard'>
             <h2>Body Requirements & Symptoms</h2>
             <p>We have designed these body requirements for you and your baby.</p>
           </div>

           <div className='cards_container_dashboard'>
             <Link to={`/${id}/food`}>
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

             <Link to={`/${id}/symptoms`}>
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

             <Link to={`/${id}/excercise`}>
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

             <Link to={`/${id}/checkups`}>
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
                     {
                      motherTips && motherTips.length != 0 && (
                        motherTips.tips && motherTips.tips.length != 0 && motherTips.tips.map((tip)=>(
                          <div className='tip_box_dashboard'>
                          <h4>{tip.title}</h4>
                          <p>{tip.description}</p>
                         </div>
                           ))
                      )
                     }
            
            {/* {
              (motherTips.tips.length != 0)?
                (motherTips.tips.map((tip)=>(
               <div className='tip_box_dashboard'>
               <h4>{tip.title}</h4>
               <p>{tip.description}</p>
              </div>
                ))):""
             
             } */}
           </div>
         </div>

         <div className='call_container_dashboard' onClick={callNumber}>
          <FiPhoneCall className="call_icon_dashboard" />
         </div>

         { showChat ? (
          <div className='call_container2_dashboard' onClick={() => setShowChat(false)}>
            <FaRobot className="call_icon_dashboard" />
          </div>
         ) : (
          <div className='chat_bot_dashboard'>
           <div className="chat_container_chatbot">
      <div className="chat_main_box_chatbot">
        {/* {selectedConversation && ( */}
        <div className="chat_window_container_chatbot">
          <div className="chat_window_top_section_chatbot">
            <div className="chat_window_top_left_section_chatbot">
              <img
                src={Logo}
                alt="profile"
              />
              <h3>Doulas</h3>
            </div>

            <div className="chat_window_top_right_section_chatbot">
              <div className="chat_window_three_dots_container_chatbot" onClick={() => setShowChat(true)}>
                <FaTimes className="three_dots_icon_chatbot" />
              </div>
            </div>
          </div>

          <div className="message_section_chatbot">
            <div className="message_top_section_chatbot">
              <p>1:50 AM</p>
            </div>

            <div className="message_middle_section_chatbot">
              <div className="message_container_type2_chatbot">
                <div className="message_box_type2_chatbot">
                  <p>How are you my friend ?</p>
                </div>
              </div>
              {/* ) : ( */}
              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>

              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>

              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>

              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>

              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>

              <div className="message_container_type1_chatbot">
                <div className="message_box_type1_chatbot">
                  <p>I a fine.</p>
                </div>
              </div>
            </div>

            <div className="message_bottom_section_chatbot">
              <div className="input_container_chatbot">
                <div className="input_top_section">
                  <input onChange={handleMessage} value={inputMessage} type="text" placeholder="Reply in Messenger..." />
                  <IoSend onClick={() => submitMessage()} className="send_icon_chatbot" />
                </div>

                <div className="input_bottom_section">
                  <div className="input_bottom_icon_container_chatbot">
                    <ImAttachment className="attach_icon_chatbot" />
                  </div>
                  <div className="input_bottom_icon_container_chatbot">
                    <TbMessageDots className="attach_icon_chatbot" />
                  </div>
                  <div className="input_bottom_icon_container_chatbot">
                    <BsEmojiSmile className="attach_icon_chatbot" />
                  </div>
                  <div className="input_bottom_icon_container_chatbot">
                    <BsTable className="attach_icon_chatbot" />
                  </div>
                  <div className="input_bottom_icon_container_chatbot">
                    <IoMdThumbsUp className="attach_icon_chatbot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
         )}

        </div>:""
      }
      <Footer />
    </div>
  )
}

export default Dashboard
