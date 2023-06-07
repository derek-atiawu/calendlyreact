import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () =>{
    return(
        <div className="help-layout">
           <h2>We are helping you with any challenges</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eveniet! </p>

          <nav>
            <NavLink to="calenderManagement" > Calender Management </NavLink>
            <NavLink to="appointment" > appointment </NavLink>
            <NavLink to="reminder" >reminders</NavLink>
          </nav>

          <Outlet/>

        </div>
    )
}

export default HelpLayout;
