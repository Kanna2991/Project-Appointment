import React from 'react';
import { withRouter } from 'react-router';

function Home({history}){
    return(
        <div className="home">
            <button onClick={()=>history.push('/appointment')}>Book Appointment</button>
        </div>
    );
}

export default withRouter(Home);