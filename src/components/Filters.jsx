import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Comparator.scss";



const Filters = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.products);
  


  const showMilky = () => {
    const milkyFilter = products.filter(product => product.category === 'lácteos');
    dispatch({type: 'setFilter', payload: milkyFilter});
  };
  const showMeatShop = () => {
    const meatShopFilter = products.filter(product => product.category === 'carnicería');
    dispatch({type: 'setFilter', payload: meatShopFilter});
  };
  const showFishShop = () => {
    const showFishFilter = products.filter(product => product.category === 'pescadería');
    dispatch({type: 'setFilter', payload: showFishFilter});
  };
  const showDrinks = () => {
    const drinksFilter = products.filter(product => product.category === 'bebidas');
    dispatch({type: 'setFilter', payload: drinksFilter});
  };
  const showPantry = () => {
    const pantryFilter = products.filter(product => product.category === 'despensa');
    dispatch({type: 'setFilter', payload: pantryFilter});
  };
  const showFrozen = () => {
    const frozenFilter = products.filter(product => product.category === 'congelados');
    dispatch({type: 'setFilter', payload: frozenFilter});
  };

  return (
    <div className="filters--container">
      <h1>Categorías</h1>
      <div className="input--box">
        <input type="text" className="input" />
        <img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt="lupa" />
      </div>
      <div className="all--products">
        <button onClick={() => dispatch({type: 'setFilter', payload: products})}><span>Todos los productos</span></button>
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
