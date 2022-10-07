import React from "react";
import "../components/css/SymptomsStyles.css";
import HeaderUser from "../components/jsx/HeaderUser";
import { Link ,useNavigate , useParams} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect,useState } from 'react';
import axios from "axios";

const Symptoms = () => {

    const navigate = useNavigate();

    const {id} = useParams();
  
    const [cookies,setCookie,removeCookie] = useCookies([]);

    const [userInfo,setUserInfo] = useState({});

    const [motherFood,setMotherFood] = useState({});
    
    const [babyChange,setBabyChanges] = useState({});

    const getUser = async()=>{
        axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
          setUserInfo(data);
          console.log(data);
        }) 
      }
  
      const motherChildInfo = async()=>{
        axios.get(`http://localhost:5000/user/motherfood/${id}`).then(({data})=>{
            console.log(data);
            setMotherFood(data);
        }); 
      }

      const babyChanges = async()=>{
        axios.get(`http://localhost:5000/user/babychanges/${id}`).then(({data})=>{
            console.log(data);
            setBabyChanges(data);
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
                 babyChanges();
              }
            })
          }
        }
      
        verifyUser() ;
      
      },[cookies,navigate,removeCookie]);

  return (
    <div>
     <HeaderUser name={userInfo.name}/>


      <div className="main_container_symptoms">
        <div className="top_section_symptoms">
          <h2>Pregnancy Symptoms Week {motherFood.week}</h2>
        </div>

 {
            (motherFood.symptoms.length != 0)?
            <div className="symptoms_container_symptoms">

            {
                (motherFood.symptoms.map((sym)=>(
            <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src={sym.image} alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>{sym.title}</h4>
                    <p>{sym.description}</p>
                </div>
            </div>
                )))
                
            }
        </div>:""
        } 



        {/* Baby Changes */}
        <div className="top_section_symptoms">
          <h2>Baby Changes Week {babyChange.week}</h2>
        </div>

       { 
        (babyChange.this_week_changes.length != 0)?
        <div className="symptoms_container_symptoms">

            {
                (
                    babyChange.this_week_changes.map((twc)=>(
                         <div className="symptoms_box_symptoms">
                <div className="symptoms_left_section_symptoms">
                    <img src={twc.image} alt="symptom" />
                </div>
                <div className="symptoms_right_section_symptoms">
                    <h4>{twc.title}</h4>
                    <p>{twc.description}</p>
                </div>
            </div>
                    ))
                )
           
            }
        </div>:""
        } 
      </div>
    </div>
  );
};

export default Symptoms;
