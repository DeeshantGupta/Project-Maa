import React from "react";
import "../components/css/CheckupsStyles.css";
import HeaderUser from "../components/jsx/HeaderUser";
import Footer from "../components/jsx/Footer";
import { Link ,useNavigate , useParams} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect,useState } from 'react';
import axios from "axios";

const Checkups = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [cookies,setCookie,removeCookie] = useCookies([]);

  const [userInfo,setUserInfo] = useState({});

  const [motherCheckUp,setMotherCheckUp] = useState({});


  const getUser = async()=>{
    axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
      setUserInfo(data);
      console.log(data);
    }) 
  }

  const motherChildInfo = async()=>{
    axios.get(`http://localhost:5000/user/motherfood/${id}`).then(({data})=>{
        console.log(data);
        setMotherCheckUp(data);
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
            removeCookie("jwt");
            navigate('/login');
          }else{ 
             getUser();
             motherChildInfo();
          }
        })
      }
    }
  
    verifyUser() ;
  
  },[cookies,navigate,removeCookie]);

 


  return (
    <div>
      <HeaderUser name={userInfo.name}/>

      <div className="main_container_checkups">
        <div className="top_section_checkups">
          <h2>Checkups, Scans and Tests</h2>
        </div>

        {
          (motherCheckUp.checkups_test_vaccines != undefined)?
            (motherCheckUp.checkups_test_vaccines.map((ctv,index)=>(
            <div className="checkup_container_checkups">
             {(index % 2 == 0)?
              <div className="checkup_box_checkups">
              <div className="checkup_left_section_checkups">
                  <h2>{ctv.title}</h2>
                  <p>{ctv.description}</p>
              </div>
              <div className="checkup_right_section_checkups">
                  <img src={ctv.image} alt="checkup" />
              </div>
             </div>
             :
             <div className="checkup_box2_checkups">
             <div className="checkup_left_section_checkups">
                 <h2>{ctv.title}</h2>
                 <p>{ctv.description}</p>
             </div>

             <div className="checkup_right_section_checkups">
                 <img src={ctv.image} alt="checkup" />
             </div>
             </div>
             }
            
          </div>
            )))
          
          :""
        }
      </div>

      <Footer />
    </div>
  );
};

export default Checkups;
