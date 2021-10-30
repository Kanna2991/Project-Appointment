import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

function NewAppointment({history}){
    const [createdAppointment, setNewAppointment] = useState(null);

    useEffect(()=>{
        const allAppointment = JSON.parse(localStorage.getItem("ALL_APPOINTMENTS"));
        if(!localStorage.getItem("SELECTED_APPOINTMENT")) history.push('/');
        if(!allAppointment) history.push('/');
        setNewAppointment(allAppointment[allAppointment.length - 1]);
    }, [history]);
    
    return(<div className="booking">
        <h2>Your Appointment Created!</h2>
        {createdAppointment && Object.keys(createdAppointment)?.map((item, i) => item !== 'id' ? <div className="new-appointment" key={i}>
            <div>{item.toUpperCase()} :</div>
            <div>{createdAppointment[item]}</div>
        </div> : '')}
        <div><button onClick={()=>{history.push('/appointment'); localStorage.removeItem("SELECTED_APPOINTMENT");}}>Book Another Appointment</button></div>
    </div>);
}

export default withRouter(NewAppointment);