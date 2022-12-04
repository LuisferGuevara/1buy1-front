import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../../redux/Auth/auth.functions";
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
    .loggedin {
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
        border-bottom: 1px solid #223137;
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
          font-size: 0.5em;
          font-weight: bolder;
        }
      }
    }
  }
`;

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
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
        {token && (
          <div className="loggedin">
            <p className="user--name">Jose Luis</p>
            <button onClick={() => logoutUser(navigate, dispatch)}>
              <img
                className="logot--logo"
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670171708/icons/logoutIcon-01_ywpjwq.svg"
                alt="Cerrar sesión logo"
              />
              <span>Cerrar Sesión</span>
            </button>
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
