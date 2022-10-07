import React from 'react';
import "../components/css/FoodStyles.css"
import HeaderUser from '../components/jsx/HeaderUser';
import { Link ,useNavigate , useParams} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect,useState } from 'react';
import axios from "axios";

const Food = () => {

    const navigate = useNavigate();

    const {id} = useParams();
  
    const [cookies,setCookie,removeCookie] = useCookies([]);

    const [userInfo,setUserInfo] = useState({});

    const [motherFood,setMotherFood] = useState([]);

    const getUser = async()=>{
        axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
          setUserInfo(data);
        }) 
      }
  
      const motherChildInfo = async()=>{
        axios.get(`http://localhost:5000/user/motherfood/${id}`).then(({data})=>{
            setMotherFood(data.data);
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

      <div className='main_container_food'>
        <div className='top_section_food'>
            <h2>Food Requirements</h2>
        </div>

        <div className='food_section_food'>
            {
                (motherFood != undefined)?
               (motherFood.map((food)=>(
                <div className='food_box_food'>
                <h3>{food.nutrient_id}</h3>
                <div className='food_need_section_food'>
                    <h5>Need</h5>
                     {
                     food.need.map((e)=>(
                        <ul>
                        <li>{e}</li>
                    </ul>
                     ))}
                    
                </div>
                <div className='food_need_section_food'>
                    <h5>Dosage</h5>
                    {
                     food.dosage.map((e)=>(
                        <ul>
                        <li>{e}</li>
                    </ul>
                     ))}
                </div>

                {
                    
                    <div className='food_detail_section_food'>
                    <h5>Food</h5>
                  {  
                     (food.food.fruit.length != 0)?
                     <div className='food_category_section_food'>
                     <h6>Fruit</h6>
                     {
                        (food.food.fruit.map((food)=>(
                            <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src={food.url} alt='food' />
                                <h4>{food.name}</h4>
                            </div>
   
                        </div>
                        )))
                       
                     }
                 </div>:""
                    
                }

{  
                     (food.food.vegetables.length != 0)?
                     <div className='food_category_section_food'>
                     <h6>Vegetables</h6>
                     {
                        (food.food.vegetables.map((veg)=>(
                            <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src={veg.url} alt='food' />
                                <h4>{veg.name}</h4>
                            </div>
   
                        </div>
                        )))
                       
                     }

                     

                 </div>:""
                    
                }
                {  
                     (food.food.nonveg.length != 0)?
                     <div className='food_category_section_food'>
                     <h6>Non-Vegetables</h6>
                     {
                        (food.food.nonveg.map((nveg)=>(
                            <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src={nveg.url} alt='food' />
                                <h4>{nveg.name}</h4>
                            </div>
   
                        </div>
                        ))) 
                       
                     }

                     

                 </div>:""
                    
                }

{  
                     (food.food.dairy.length != 0)?
                     <div className='food_category_section_food'>
                     <h6>Dairy Products</h6>
                     {
                        (food.food.dairy.map((dp)=>(
                            <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src={dp.url} alt='food' />
                                <h4>{dp.name}</h4>
                            </div>
   
                        </div>
                        ))) 
                       
                     }

                     

                 </div>:""
                    
}

{  
                     (food.food.others.length != 0)?
                     <div className='food_category_section_food'>
                     <h6>Others</h6>
                     {
                        (food.food.others.map((ot)=>(
                            <div className='food_cards_container_food'>
                            <div className='food_card_food'>
                                <img src={ot.url} alt='food' />
                                <h4>{ot.name}</h4>
                            </div>
   
                        </div>
                        ))) 
                       
                     }

                     

                 </div>:""
                    
}


                     </div>

                }

                
               </div>
               ))):""
            }
        </div>
      </div>
    </div>
  )
}

export default Food
