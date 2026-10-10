import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Loyaut() {
  return (
    <div>
        
        <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        </nav>

        <Outlet/>

    </div>
  )
}
