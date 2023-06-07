import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const RootLayout = () =>{
    return(
        <div classname="root-Layout">
          <header>
           <nav>
            <h1 style={{color: 'blue'}} >Calendly</h1>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="individuals" > Individuals</NavLink>
            <NavLink to="enterprise" > Enterprise</NavLink>
            <NavLink to="teams" > Teams</NavLink>
            <NavLink to="help" > Help</NavLink>
           </nav>
         </header>

         <main>
            <Outlet/>
         </main>
        </div>
    )
}

export default RootLayout;