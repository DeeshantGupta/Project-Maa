import React, { useState, useEffect } from "react";
import "../components/css/DetailsOneStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import HeaderAuth from "../components/jsx/HeaderAuth";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'

const DetailsOne = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [cookies,setCookie,removeCookie] = useCookies([]);

   const [userInfo,setUserInfo] = useState({});

   const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  const foodData = ["Vegetarian", "Both (Veg & Non-Veg)"]
  const [selectedFood, setSelectedFood] = useState("");
 
  const handleFood = (event) => {
    setSelectedFood(event.target.value);
  }

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const type = "register";

  const [user, setUser] = useState({
    age: "",
    expecteddate: "",
    childnumber: "",
    currentweek: "",
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  }

  const getUser = async()=>{
    axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
      setUserInfo(data);
    })
  }

  const userDetails = {
    user,
    selectedFood
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
          if(data.flag){
            navigate(`/${data.id}/dashboard`);
            getUser();
          } 
          else{
            navigate(`user/${data.id}/detailsone`);
          }
        }
      })
    }
  }

  verifyUser() ;

  if( Object.keys(formErrors).length === 0 && isSubmit ){
      axios.post(`http://localhost:5000/user/postdetails/${id}`,{
        ...userDetails
       }).then(({data})=>{
        if(data.errors){
          setFormErrors(data.errors);
        }
        else if(data.message == "true" && data.verified == true)
        {
          navigate(`/${id}/dashboard`);
        }else{
          navigate(`/user/${id}/detailsone`);
        }
       });
  }

},[formErrors,cookies,navigate,removeCookie])

  const validate = (values) => {
    
    const errors = {};

    if(!values.age){
      errors.age = "Mother's age required";
    }else if(values.age < 0){
        errors.age = "Invalid Age"
    }

    if(!values.expecteddate){
        errors.expecteddate = "Expected date required"
    }

    if(!values.childnumber){
        errors.childnumber = "Child number required"
    }else if(values.childnumber < 0){
        errors.childnumber = "Invalid child number"
    }

    if(!values.currentweek){
        errors.currentweek = "Current week required";
      }else if(values.currentweek < 0){
          errors.currentweek = "Current week should be greater than or equal to 0"
      }else if(values.currentweek > 42){
        errors.currentweek = "Current week should be less than 42"
      }

    if(!selectedFood){
        errors.food = "Food Category required"
    }


    return errors;
  }


  return (
    <div>
      <HeaderAuth />

      <div className="main_detailsOne">
        <div className="greeting_container_detailsOne">
          <div className="greeting_box_detailsOne">
            <div className="greeting_left_section_detailsOne">
              <h4>Welcome to Maatri</h4>
              <p>
                <span>{userInfo.name}</span> build your profile to join our
                community.
              </p>
            </div>

            <div className="greeting_right_section_detailsOne">
              <button onClick={submitForm} className="btn_primary_detailsOne">
                Submit{" "}
                <BsArrowRightShort size={27} className="btn_primary_logo_detailsOne"/>
              </button>
            </div>
          </div>
        </div>

        <div className="form_container_detailsOne">
          <form>
            <div className="form_main_box_detailsOne">
              <div className="form_box_detailsOne box1_detailsOne">
                 <label>Mother's Age*</label>
                 <input type="number" name="age" placeholder="Enter Mother's Age" value={user.age} onChange={handleForm} />
                 <p className="errors-msg_detailsOne">{formErrors.age}</p>
              </div>

              <div className="form_box_detailsOne">
                 <label>Expected Birth Date*</label>
                 <input type="date" min={disablePastDate()} name="expecteddate" placeholder="Enter Birth Date" value={user.expecteddate} onChange={handleForm} />
                 <p className="errors-msg_detailsOne">{formErrors.expecteddate}</p>
              </div>

              <div className="form_box_detailsOne">
                 <label>Child Number*</label>
                 <input type="number" name="childnumber" placeholder="Year of Establishment" value={user.childnumber} onChange={handleForm} />
                 <p className="errors-msg_detailsOne">{formErrors.childnumber}</p>
              </div>
              
              <div className="form_box_detailsOne">
                 <label>Enter Food Category*</label>
                 <select onChange={handleFood} className="select_detailsOne">
                  <option value="" disabled selected hidden>Enter Food Category</option> 
                  {foodData.map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                 </select>
                 <p className="errors-msg_detailsOne">{formErrors.food}</p>
              </div>

              <div className="form_box_detailsOne">
                 <label>Current Week*</label>
                 <input type="number" name="currentweek" placeholder="Enter Current Week" value={user.currentweek} onChange={handleForm} />
                 <p className="errors-msg_detailsOne">{formErrors.currentweek}</p>
              </div>
            </div>
          </form>

          <button onClick={submitForm} className="btn_primary_detailsOne">
            Submit{" "} <BsArrowRightShort size={27} className="btn_primary_logo_detailsOne"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsOne;
