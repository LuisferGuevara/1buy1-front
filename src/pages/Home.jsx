import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home--section">
      <div className="title">
        <h1>
          1<span className="buy">BUY</span>1 - Tu comparador de confianza
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ab, nulla eveniet
          veritatis soluta sunt qui quibusdam dolorem nobis quod porro laborum consectetur ipsa? Sit
          odio provident eaque illo illum?
        </p>
      </div>
      <div className="links--container">
        <NavLink to="/comparator" className="links--comparator">
          Empieza a COMPARAR
        </NavLink>
        <NavLink to="/tutorial" className="links--tutorial">
          Guía de Uso
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
