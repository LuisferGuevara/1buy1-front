import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../../redux/Auth/auth.functions";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  li {
    padding: 18px 10px;
    a,
    p {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #efefef;
    z-index: -1;
    position: fixed;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-500%)")};
    top: 56px;
    left: 0;
    min-height: fit-content;
    height: 1000vh;
    width: 100vw;
    padding-top: 2.2rem;
    transition: transform 0.3s ease-in-out;
    &:before {
      content: " ";
      background-color: orange;
      width: 100vw;
    }

    li {
      color: #223137;
      border-bottom: 3px solid #f6b637;
      margin: 0 auto;
      width: 80%;
      position: relative;
    }
    .logout {
      display: flex;
      justify-content: center;
      img {
        margin-left: 1em;
        width: 25px;
      }
    }
  }
`;

const LeftNav = ({ isOpen, setIsOpen }) => {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Ul isOpen={isOpen}>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/comparator">Comparador</NavLink>
      </li>
      {token && (
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/cart">Compra eficiente</NavLink>
        </li>
      )}
      <li onClick={() => setIsOpen(false)}>
      <NavLink to="/aboutUs">Sobre nosotros</NavLink>
      </li>
      {token && (
        <li onClick={() => setIsOpen(false)}>
          <NavLink to="/profile">Datos personales</NavLink>
        </li>
      )}
      {token && (
        <li
          className="logout"
          onClick={() => {
            setIsOpen(false);
            logoutUser(navigate, dispatch);
          }}
        >
          <p>Cerrar sesión</p>
          <img
            className="logot--logo"
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670171708/icons/logoutIcon-01_ywpjwq.svg"
            alt="Cerrar sesión logo"
          />
        </li>
      )}
    </Ul>
  );
};

export default LeftNav;
