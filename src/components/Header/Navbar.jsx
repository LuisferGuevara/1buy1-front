import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 3px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .logo {
    padding: 15px 0;
    background-color:red;
  }
  @media (max-width: 768px) {
    position: relative;
    justify-content: flex-end;
    align-items: center;
    .logo{
      position: absolute;
      left: 45%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
      <div className="logo">
        logo
      </div>
      <div className='header--user'>
        <NavLink>
        <img src='https://dn-icons-png.flaticon.com/512/1946/1946429.png' alt='userIcon'/>
        </NavLink>
      </div>
    </Nav>
  )
}

export default Navbar