import React from "react";
import "../styles/Comparator.scss";

const Filters = () => {
  return (
    <div className="filters--container">
      <h1>Categorías</h1>
      <div className="input--box">
        <input type="text" className="input" />
        <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="lupa" />
      </div>
      <ul>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082557/icons/lacteos/lacteos-31_z4wtfl.svg"
              alt="logo panadería"
            />
            <p>Lácteos</p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670103438/icons/carniceria/carniceria-33-33_blu89c.svg"
              alt="logo carnicería"
            />
            <p>Carnicería</p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082703/icons/bebidas/bebidas-07_j8glfa.svg"
              alt="logo bebidas"
            />
            <p>Bebidas</p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082489/icons/pescaderia/pescaderia-05-17_rt6nyy.svg"
              alt="logo pescadería"
            />
            <p>Pescadería</p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082708/icons/despensa/despensa-17-20_akajbz.svg"
              alt="logo despensa"
            />
            <p>Despensa</p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082864/icons/congelados/congelados-26-32_hsw7bs.svg"
              alt="logo congelados"
              className="congelados"
            />
            <p>Congelados</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
