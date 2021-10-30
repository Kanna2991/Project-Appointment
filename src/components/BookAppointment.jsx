import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

function BookAppointment({history}){
    useEffect(()=>{
        if(!localStorage.getItem("SELECTED_APPOINTMENT")) history.push('/');
    }, [history]);

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
   
    const formSubmit = (e) => {
        e.preventDefault();
        let error = false;
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        // eslint-disable-next-line no-useless-escape
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {error = true; setEmailError("You entered invalid email-id");}
        if(phone.toString().length !== 10 || phone < 0) {error = true; setPhoneError("You entered invalid phone number");}
        if(!error) {
            const allAppointments = JSON.parse(localStorage.getItem("ALL_APPOINTMENTS")) || [];
            const selectedAppointment = localStorage.getItem("SELECTED_APPOINTMENT").split('_');
            const newAppointment = { name, email, phone, date: selectedAppointment[0], time: selectedAppointment[1], id: localStorage.getItem("SELECTED_APPOINTMENT")};
            allAppointments.push(newAppointment);
            localStorage.setItem("ALL_APPOINTMENTS", JSON.stringify(allAppointments));
            history.push('/new-appointment');
        }
    }
    return <div className="booking">
        <h2>{'Kindly fill this form to complete your booking'}</h2>
        <form onSubmit={formSubmit}>
            <div>
                <input placeholder="Enter Your Name" type="text" minLength="3" name="userName" autoComplete={"off"} required/>
                <p className="error">{}</p>
            </div>
            <div>
                <input className={emailError?"invalid":""} placeholder="Enter Your Email Id" type="email" name="userEmail" autoComplete={"off"} required/>
                {emailError ? <p className="error">{emailError}</p> : ''}
            </div>
            <div>
                <input className={phoneError?"invalid":""} placeholder="Enter Your 10 Digit Phone Number" type="number" min="0" minLength="10" max="9999999999" name="userPhone" autoComplete={"off"} required/>
                {phoneError ? <p className="error">{phoneError}</p> : ''}
            </div>
            <button type="submit">Book Appointment</button>
        </form>
        
    </div>
}

export default withRouter(BookAppointment);