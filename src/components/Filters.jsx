import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Comparator.scss";

const Filters = () => {
  const dispatch = useDispatch();

  let { products, category } = useSelector((state) => state.products);

  useEffect(() => {
    document.querySelector("#productSearchBar").value = "";
  }, [category]);

  const showMilky = () => {
    const milkyFilter = products.filter((product) => product.category === "lácteos");
    dispatch({ type: "setCategory", payload: milkyFilter });
  };

  const showMeatShop = () => {
    const meatShopFilter = products.filter((product) => product.category === "carnicería");
    dispatch({ type: "setCategory", payload: meatShopFilter });
  };

  const showFishShop = () => {
    const showFishFilter = products.filter((product) => product.category === "pescadería");
    dispatch({ type: "setCategory", payload: showFishFilter });
  };

  const showDrinks = () => {
    const drinksFilter = products.filter((product) => product.category === "bebidas");
    dispatch({ type: "setCategory", payload: drinksFilter });
  };

  const showPantry = () => {
    const pantryFilter = products.filter((product) => product.category === "despensa");
    dispatch({ type: "setCategory", payload: pantryFilter });
  };

  const showFrozen = () => {
    const frozenFilter = products.filter((product) => product.category === "congelados");
    dispatch({ type: "setCategory", payload: frozenFilter });
  };

  const showAll = () => {
    dispatch({ type: "setCategory", payload: products });
  };

  const searcher = (event) => {
    const searchFilter = category.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    dispatch({ type: "setFilter", payload: searchFilter });
  };

  return (
    <div className="filters--container">
      <h1>Categorías</h1>
      <div className="input--box">
        <input type="text" className="input" onKeyUp={searcher} id="productSearchBar" />
        <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="lupa" />
      </div>
      <div className="all--products">
        <button onClick={() => showAll()}>
          <span>Todos los productos</span>
        </button>
      </div>
      <ul>
        <li>
          <button onClick={showMilky} value="Lácteos">
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082557/icons/lacteos/lacteos-31_z4wtfl.svg"
              alt="logo lácteos"
            />
            <p>Lácteos</p>
          </button>
        </li>
        <li>
          <button onClick={showMeatShop}>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670103438/icons/carniceria/carniceria-33-33_blu89c.svg"
              alt="logo carnicería"
            />
            <p>Carnicería</p>
          </button>
        </li>
        <li>
          <button onClick={showDrinks}>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082703/icons/bebidas/bebidas-07_j8glfa.svg"
              alt="logo bebidas"
            />
            <p>Bebidas</p>
          </button>
        </li>
        <li>
          <button onClick={showFishShop}>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082489/icons/pescaderia/pescaderia-05-17_rt6nyy.svg"
              alt="logo pescadería"
            />
            <p>Pescadería</p>
          </button>
        </li>
        <li>
          <button onClick={showPantry}>
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670082708/icons/despensa/despensa-17-20_akajbz.svg"
              alt="logo despensa"
            />
            <p>Despensa</p>
          </button>
        </li>
        <li>
          <button onClick={showFrozen}>
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
