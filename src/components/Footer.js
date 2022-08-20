import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const navStyleLink = ({isActive}) => {
    return{
      borderBottom: isActive ? '1px solid #000' : '',
    }

  }
  return (
    <footer className='footer_nav'>
       
            <ul className='footer__links'>
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
        

    </footer>
  )
}
