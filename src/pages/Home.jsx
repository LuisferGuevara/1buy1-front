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
          Te ayudamos a ahorrar comparando el precio de un mismo producto en diferentes
          supermercados. Ofertas y precios garantizados día a día. 1BUY1 te ofrece, en exclusivo
          para Usuarios Registrados, la posibilidad de automatizar tu compra de manera eficiente.
        </p>
      </div>
      <div className="links--container">
        <NavLink to="/comparator" className="links--comparator">
          Empieza a COMPARAR
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
