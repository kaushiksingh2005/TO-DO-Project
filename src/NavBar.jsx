import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <>
    <div className='NavLink'>
    <NavLink className="NavBar" to="/">Home</NavLink>
    <NavLink className="NavBar" to="/addtodo">To-Do</NavLink>
    </div>
    </>
  )
}

export default NavBar