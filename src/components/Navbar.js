import { NavLink } from 'react-router-dom'
import './Navbar.css'

import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar'>
       
            <ul className='nav__links'>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                  <NavLink to='/products'>Products</NavLink>
                </li>
            </ul>
        

    </nav>
  )
}
