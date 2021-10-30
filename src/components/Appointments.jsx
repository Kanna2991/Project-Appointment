import moment from 'moment';
import React from 'react';
import { withRouter } from 'react-router';

const slots = ["09 AM - 11 AM", "11 AM - 01 PM", "02 PM - 04 PM", "04 PM - 06 PM", "06 PM - 08 PM"];
const dates = [{title: 'Today', date: moment().format('L')},
    {title: 'Tomorrow', date: moment().add(1, 'days').format('L')},
    {title: 'Day After Tomorrow', date: moment().add(2, 'days').format('L')}
]
function Appointments({history}){
    const appointments = JSON.parse(localStorage.getItem("ALL_APPOINTMENTS")) || [];
    const goToAppointment = (date, time) => {
        localStorage.setItem("SELECTED_APPOINTMENT", `${date}_${time}`);
        history.push('/book-appointment')
    }
    const availableCheck = (date, time) => {
        return !!appointments.find(item => date === item.date && time === item.time) ? 'blocked' : 'available'
    }
    return(
        <div className="appointements">
            <div className="dates">
                {dates.map((dateItem, i) => <div key={i}>
                    <h3>{dateItem.title}</h3>
                    <span>({dateItem.date})</span>
                    <div className="slots">
                        {slots.map(item => <div key={item}>
                            <div><button className={availableCheck(dateItem.date, item)} onClick={()=>goToAppointment(dateItem.date, item)}>{item}</button></div>
                        </div>)}
                    </div>
                </div>)}
            </div>
            <div className="info">
                <div><span/> Available</div>
                <div><span className="blocked"/> Booked</div>
            </div>
        </div>
    );
}

export default withRouter(Appointments);