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
import axios from "axios";

const Dashboard = () => {
    const image = "https:drive.google.com/file/d/1QtjuQz6Zb_xsUWZRIViGGX-dZtgijXgb/view?usp=sharing";

    const navigate = useNavigate();

    const {id} = useParams();
  
    const [cookies,setCookie,removeCookie] = useCookies([]);

    const [userInfo,setUserInfo] = useState({});

    const [motherChild,setMotherChild] = useState([]);

    const [motherTips,setMotheTips] = useState({});

    const getUser = async()=>{
      axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
        console.log(data);
        setUserInfo(data);
      }) 
    }

    const motherChildInfo = async()=>{
      axios.get(`http://localhost:5000/user/motherchildinfo/${id}`).then(({data})=>{
        console.log(data);
        setMotherChild(data.info);
      }); 
    }

    const tipsMother = async()=>{
      axios.get(`http://localhost:5000/user/motherfood/${id}`).then(({data})=>{
        console.log(data);
        setMotheTips(data);
    }); 
    }

    useEffect(()=>{
      
      const verifyUser = ()=>{
        if(!cookies.jwt){
          navigate('/login');
        }else{
          axios.post(`http://localhost:5000/user/checkuser`,{},{
            withCredentials:true,
          }).then(({data})=>{
            console.log(data);
            if(data.id != id){
              console.log("hii 99")

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
                       (motherChild[0].size == "")?"":  <p>{motherChild[0].size} cm</p>
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
              (motherTips.tips.length != 0)?
                (motherTips.tips.map((tip)=>(
               <div className='tip_box_dashboard'>
               <h4>{tip.title}</h4>
               <p>{tip.description}</p>
              </div>
                ))):""
             
             }
           </div>
         </div>
        </div>:""
      }
      <Footer />
    </div>
  )
}

export default Dashboard
