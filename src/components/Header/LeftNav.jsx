import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  li {
    padding: 18px 10px;
    a {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #efefef;

    z-index: -1;
    position: fixed;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-500%)")};
    top: 58px;
    left: 0;
    min-height: fit-content;
    height: 1000vh;
    width: 100vw;
    padding-top: 2.2rem;
    transition: transform .3s ease-in-out;
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
  }
`;

const LeftNav = ({ isOpen, setIsOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/comparator">Comparador</NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>Compra eficiente </li>
      <li onClick={() => setIsOpen(false)}>About US ?</li>
      <li onClick={() => setIsOpen(false)}>Guía de uso</li>
    </Ul>
  );
};

export default LeftNav;
