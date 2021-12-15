import style from './contact.module.css'
import React, { useState } from 'react';


export default function Contact() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    //   Form validation state
    const [errors, setErrors] = useState({});
  
    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");
  
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
  
    // Validation check method
    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;
  
      if (fullname.length <= 0) {
        tempErrors["fullname"] = true;
        isValid = false;
      }
      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }
      if (subject.length <= 0) {
        tempErrors["subject"] = true;
        isValid = false;
      }
      if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
      }
  
      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };
  
    //   Handling form submit
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValidForm = handleValidation();
  
      if (isValidForm) {
        setButtonText("Sending");
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
      }
      console.log(fullname, email, subject, message);
    };

    return (
        <div className=" section" id="contact">
        <div className="row">       
                <h2>Get in Touch</h2>
            <div className="col-12">
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input    
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                                }}
                            type="text" className="form-control" name="fullname" id="name" aria-describedby="helpId"
                            placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input  value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text"
                         value={subject}
                         onChange={(e) => {
                           setSubject(e.target.value);
                         }} className="form-control" name="subject" id="subject" aria-describedby="helpId"
                            placeholder="Subject"></input>
                    </div>
                  
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }} className="form-control" rows="5" placeholder="Message" name="message"></textarea>
                    </div>

                    <button type="submit" className="btnSubmit">Send away</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    )
}