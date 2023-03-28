import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import SignUpLogo from "../img/signup-image.png";
import InstaLogo from "../img/instagram-logo.svg";
import LinkedinLogo from "../img/linkedin-logo.svg";
import YoutubeLogo from "../img/youtube-logo.svg";
import "../components/css/SignUpStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import HeaderAuth from "../components/jsx/HeaderAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpDoctor = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [checkboxCheck, setCheckboxCheck] = useState(false);

  const type = "register"

  const [user, setUser] = useState({
    name: "",
    email: "",
    designation: "",
    hospital: "",
    image: "",
    description: ""
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

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      axios.post("http://localhost:5000/user/doctorsignup", user)
      .then( res => {
        if(res.data.errors){
          setFormErrors(res.data.errors)
        }
       else if(res.data.message === "true"){
          navigate(`/emailverify/${type}`);
        }else {
          setFormErrors({final: res.data.message});
        }
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.name){
      errors.name = "Name required";
    }else if(values.name.length < 2){
      errors.name = "Minimum 2 characters required";
    }else if(values.name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!values.email){
      errors.email = "Email required";
    }else if(!regex.test(values.email)){
      errors.email = "Incorrect Email Format";
    }

    if(!values.designation){
      errors.designation = "Designation required"
    }

    if(!values.hospital){
        errors.hospital = "Hospital Name required"
      }

      if(!values.description){
        errors.description = "Description required"
      }

      if(!values.image){
        errors.image = "Image URL required"
      }

    if(!checkboxCheck){
      errors.checkbox = "Accept Terms & Conditions to Continue";
    }

    return errors;
  }

  return (
    <div>
      <HeaderAuth />

      <div className="main_signup">
        <div className="left-part_signup">
          <div className="top_signup">
            <h2>Find Your Baby's Care !</h2>
            <p>Sign Up to become a part of our community</p>
          </div>

          <div className="signup-banner_signup">
            <img src={SignUpLogo} alt="Sign Up" />
          </div>

          <div className="social_signup">
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={YoutubeLogo} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-part_signup">
          <div className="form-container_signup">
            <div className="top_signup">
              <h2>Create Account</h2>
              <Link to="/login">Sign In</Link>
            </div>

            <div className="line_signup"></div>

            <div className="main-msg_signup">
              <p>{formErrors.final}</p>
            </div>

            <div className="mid-part_signup">
              <form onSubmit={submitForm}>
                <div className="form-main-box_signup">
                <div className="form-box_signup box1_signup">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your Name" value={user.name} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.name}</p>
                </div>

                <div className="form-box_signup box2_signup">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Your Email Address" value={user.email} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.email}</p>
                </div>
 
                <div className="form-box_signup box3_signup">
                  <label>Designation</label>
                  <input type="text" name="designation" placeholder="Your Designation" value={user.designation} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.designation}</p>
                </div>

                <div className="form-box_signup box4_signup">
                  <label>Hospital Name</label>
                  <input type="text" name="hospital" placeholder="Enter Hospital Name" value={user.hospital} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.hospital}</p>
                </div>

                <div className="form-box_signup box5_signup">
                  <label>Your Image</label>
                  <input type="url" name="image" placeholder="Your Image URL" value={user.image} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.image}</p>
                </div>

                <div className="form-box_signup box6_signup">
                  <label>Description</label>
                  <textarea rows={2} name="description" placeholder="Enter Description" value={user.description} onChange={handleForm}></textarea>
                  <p className="errors-msg_signup">{formErrors.description}</p>
                </div>

                <div className="box7_signup">
                  <div>
                  <input type="checkbox" id="cb1" onClick={() => setCheckboxCheck(!checkboxCheck)} />
                  <label for="cb1"></label>
                  <p><span>I agree to</span> <a href="youtube.com">Terms and Conditions</a></p>
                  </div>
                  <p className="errors-msg_signup">{formErrors.checkbox}</p>
                </div>
                </div>

                <button type="submit" onClick={submitForm} className="create-btn_signup">
                  Register as Doctor
                  <BsArrowRightShort size={27} className="create-btn-logo_signup" />
                </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDoctor;
