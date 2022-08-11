import { NavLink } from 'react-router-dom'
import './Navbar.css'

import React from 'react'

export const Navbar = () => {

  const navStyleLink = ({isActive}) => {
    return{
      borderBottom: isActive ? '1px solid #000' : '',
    }

  }
  return (
    <nav className='navbar'>
       
            <ul className='nav__links'>
                <li>
                  <NavLink to='/' style={navStyleLink}>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about' style={navStyleLink}>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact' style={navStyleLink}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to='/products' style={navStyleLink}>Products</NavLink>
                </li>
            </ul>
        

    </nav>
  )
}
