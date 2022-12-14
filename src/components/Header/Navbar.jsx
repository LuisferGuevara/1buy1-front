import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    width: 20px;
    @media (min-width: 769px) {
      width: 30%;
      img {
        width: 100px;
      }
    }
  }
  .cart-log {
    img {
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
    .loggedin {
      display: flex;
      p {
        font-size: 1em;
        font-weight: bolder;
        width: 100px;
        text-align: center;
        word-wrap: break-word;
      }
      img {
        width: 25px;
        margin-left: 0.5em;
      }
    }
  }
  @media (min-width: 769px) {
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    .menu--box {
      margin: 0 auto;
      width: 100%;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width:1100px;
    }
    height: 65px;
    img {
      width: 40px;
    }

    .logo {
      position: absolute;
      top: 5px;
      left: 2%;
      width: fit-content;
      height: 60px;
      a {
        height: 100%;
        width: 100%;
        img {
          width: 80px;

          objet-fit: contain;
        }
      }
    }
    .user {
      width: 30px;
    }
    .loggedin {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 1.2em;
        font-weight: bolder;
      }
      .cart--logo__box {
        width: 30px;
        img {
          width: 80%;
          margin-left: 0.5em;
        }
      }
    }
  }
`;

const Navbar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  let cartStorage = JSON.parse(localStorage.getItem("cart"));
  
  const dispatchRedux = () => {
    setIsInCart(true);
    dispatch({ type: "setCart", payload: cartStorage });
  }

  return (
    <Nav>
      <div className="menu--box">
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} setIsInCart={setIsInCart}/>
        <div className="logo">
          <NavLink to="/" onClick={() => {setIsOpen(false); setIsInCart(false)}}>
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
              {!isInCart ?
              
              <NavLink to="/cart" onClick={() => {dispatchRedux(); setIsOpen(false); setIsInCart(true)}} className="cart-logo">
                <div className="cart--logo__box">
                  <img
                    src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670174228/icons/carrito-05_xxbnqm.svg"
                    alt="Carrito"
                  />
                </div>
              </NavLink> :
              <NavLink to="/comparator" onClick={() => {setIsInCart(false); setIsOpen(false); setIsInCart(false)}} className="cart-logo">
                <div className="cart--logo__box">
                  <img
                    src="
                    https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670361484/icons/comparatorIcon/balanceIcon-01_wgx02i.svg
                    "
                    alt="Carrito"
                  />
                </div>
              </NavLink>
              }
            </div>
          )}
          {!token && (
            <>
              <NavLink to="/login" onClick={() => {setIsOpen(false); setIsInCart(false)}}>
                <img
                  src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670171968/icons/user-02_wuc8uu.svg"
                  alt="userIcon"
                  className="user"
                />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
