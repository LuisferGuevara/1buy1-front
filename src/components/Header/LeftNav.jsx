import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    z-index:1;
    height: 100vh;
    width: 42vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Comporador</li>
      <li>Compra eficiente </li>
      <li>About US ?</li>
      <li>Guía de uso</li>
    </Ul>
  )
}

export default LeftNav
