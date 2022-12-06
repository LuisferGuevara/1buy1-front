import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/CompraEficiente.scss";

const CompraEficiente = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.auth);

  let cartStorage = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    dispatch({ type: "setCart", payload: cartStorage });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Compra más barata
  const minProduct = cart.map((product) =>
    product.supermarkets.reduce((prev, curr) => (prev.priceUd < curr.priceUd ? prev : curr))
  );
  const sumProduct = minProduct.reduce((acc, curr) => acc + curr.priceUd, 0);

  // Compra más eficiente
  let carrefour = cart.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "carrefour")
  );
  carrefour = carrefour.filter((product) => product);

  let alcampo = cart.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "alcampo")
  );
  alcampo = alcampo.filter((product) => product);

  let dia = cart.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "dia")
  );
  dia = dia.filter((product) => product);

  const carrefourPriceUd = {
    supermarket: carrefour,
    totalSum: carrefour.reduce((acc, curr) => acc + curr.priceUd, 0),
  };
  const alcampoPriceUd = {
    supermarket: alcampo,
    totalSum: alcampo.reduce((acc, curr) => acc + curr.priceUd, 0),
  };
  const diaPriceUd = {
    supermarket: dia,
    totalSum: dia.reduce((acc, curr) => acc + curr.priceUd, 0),
  };

  const allSuper = [carrefourPriceUd, alcampoPriceUd, diaPriceUd];

  const maxProducts = Math.max(
    alcampoPriceUd.supermarket.length,
    carrefourPriceUd.supermarket.length,
    diaPriceUd.supermarket.length
  );
  const maxProductsSupermarkets = allSuper.filter(
    (supermarket) => supermarket.supermarket.length === maxProducts
  );
  console.log(maxProductsSupermarkets);
  const maxProductsPrices = maxProductsSupermarkets.map((supermarket) => supermarket.totalSum);

  const minSupermarket = Math.min(...maxProductsPrices);
  const cheapestSupermarket = allSuper.find(
    (supermarket) => supermarket.totalSum === minSupermarket
  );

  console.log(cheapestSupermarket);

  return (
    <section>
      <h2>LISTA DE LA COMPRA</h2>
      {cart.map((product) => {
        return (
          <div className="cart--container">
            <span id="cart--container--product-name">{product.name}</span>
            <div className="cart--container--buttons">
              <button>-</button>
              <span id="cart--container--product-price">Number</span>
              <button>+</button>
              <div
                className="cart--container--binbox"
                onClick={() => {
                  cartStorage = cartStorage.filter(
                    (cartProduct) => cartProduct.name !== product.name
                  );
                  localStorage.setItem("cart", JSON.stringify(cartStorage));
                  dispatch({ type: "setCart", payload: cartStorage });
                }}
              >
                <img
                  src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670256609/icons/cartListIcons-08_cwelaa.svg"
                  alt="Papelera"
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="cart--cheapest">
        <h2>Compra más barata</h2>
        <div className="cart--cheapest__box">
          {minProduct.map((product) => {
            return (
              <div className="cart--cheapest__info">
                <div className="box">
                  <img src={product.logo} alt={product.supermarketName} />
                  <p>{product.productName}</p>
                </div>
                <span>{product.priceUd}</span>
              </div>
            );
          })}
        </div>
        <h3>
          <span>Total: </span>
          {(Math.round(sumProduct * 100) / 100).toFixed(2)} €
        </h3>
      </div>
      <div className="cart--eficient">
        <h2>Compra mas eficiente</h2>
        <div className="cart--eficient__box">
          {cheapestSupermarket.supermarket.map((product) => {
            return (
              <div className="cart--eficient__info">
                <div className="box">
                  <img src={product.logo} alt={product.supermarketName} />
                  <p>{product.productName}</p>
                </div>
                <span>{product.priceUd} </span>
              </div>
            );
          })}
        </div>
        <h3>TOTAL: {(Math.round(cheapestSupermarket.totalSum * 100) / 100).toFixed(2)} €</h3>
      </div>
      <button className="show-more">Mostrar Kg/L</button>
    </section>
  );
};

export default CompraEficiente;
