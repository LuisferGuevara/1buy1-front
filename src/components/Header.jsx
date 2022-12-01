import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/comparator'>Comparador</NavLink>       
      </nav>
      <div>
        <img 
        src='https://res.cloudinary.com/dfxn0bmo9/image/upload/v1669916552/icons/1buy1-logo1-03_glar7y.svg' 
        alt='1buy1Logo'/>
      </div>
      <div className='header--user'>
        <NavLink>
        <img src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' alt='userIcon'/>
        </NavLink>
      </div>
    </header>
  )
}

export default Header