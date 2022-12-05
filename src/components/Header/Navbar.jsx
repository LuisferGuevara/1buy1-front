import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  .cart-log {
    img {
      width: 20px;
    }
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
    ${
      "" /* .loggedin {
      width: 110%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        text-align: center;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 0.8em;
        width: fit-content;
      }
      button {
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .logot--logo {
          width: 25px;
          background-color: #f6b637;
          
        }
        span {
          font-size: 0.8em;
          font-weight: bolder;
        }
      }
    } */
    }
    .loggedin {
      display: flex;
      p {
        font-size: 1em;
        font-weight: bolder;
      }
      img {
        width: 25px;
        margin-left: .5em;
      }
    }
  }
`;

const Navbar = () => {
  const { token, user } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="logo">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670081881/icons/1buy1Logo-01_pnqmca.svg"
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="header--user">
        {token && (
          <div className="loggedin">
            <p>{user.name}</p>
            <NavLink to="/cart" className="cart-logo">
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670174228/icons/carrito-05_xxbnqm.svg"
                alt="Carrito"
              />
            </NavLink>
          </div>
        )}
        {!token && (
          <>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670171968/icons/user-02_wuc8uu.svg"
                alt="userIcon"
                className="user"
              />
            </NavLink>
          </>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
