import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6b637;
  border-bottom: 2px solid #223137;
  .logo {
    padding: 5px 0;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 80px;
    }
    .user {
      width: 30px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="logo">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670081881/icons/1buy1Logo-01_pnqmca.svg"
            alt="logo"
            className="logo"
          />
        </NavLink>
      </div>
      <div className="header--user">
        {/* <p>Jose</p>
        <button>Cerrar sesión</button> */}
        <NavLink to="/login" onClick={() => setIsOpen(false)}>
          <img
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670090914/icons/userIcon-08_adwm0m.svg"
            alt="userIcon"
            className="user"
          />
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
