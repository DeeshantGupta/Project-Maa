import React, { useState } from "react";
import "../css/HomeBanner4Styles.css";
import Image from "../../img/banner-images/contactus-image.png";

const HomeBanner4 = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
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

    if(!values.description){
      errors.description = "Description required"
    }

    return errors;
  }

  return (
    <div>
      <div className="main_container_homebanner4">
        <div className="top_section_homebanner4">
          <h2>Contact Us</h2>
          <p>Send your queries and feedbacks to us.</p>
        </div>

        <div className="bottom_section_homebanner4">
          <div className="bottom_left_section_homebanner4">
            <div className="square1_homebanner4">
              <img src={Image} alt="contact" />
            </div>
            <div className="square2_homebanner4"></div>
          </div>

          <div className="bottom_right_section_homebanner4">
          <form>
            <div className="form_main_box_homebanner4">
              <div className="form_box_homebanner4">
                 <label>Name</label>
                 <input type="name" name="name" placeholder="Enter Your Name" value={user.name} onChange={handleForm} />
                 <p className="errors-msg_homebanner4">{formErrors.name}</p>
              </div>

              <div className="form_box_homebanner4">
                 <label>Email</label>
                 <input type="email" name="email" placeholder="Enter Email Id" value={user.email} onChange={handleForm} />
                 <p className="errors-msg_homebanner4">{formErrors.email}</p>
              </div>

              <div className="form_box_homebanner4">
                 <label>Query / Feedback</label>
                 <textarea rows={5} name="description" placeholder="Enter Your Query / Feedback" value={user.description} onChange={handleForm}></textarea>
                 <p className="errors-msg_homebanner4">{formErrors.description}</p>
              </div>
            </div>
          </form>
          <div className="btn_container_homebanner4">
            <button className="btn_primary_homebanner4">Send</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner4;
