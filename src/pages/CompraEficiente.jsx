import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/CompraEficiente.scss";

const CompraEficiente = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.auth);

  const [priceToggle, setPriceToggle] = useState(false);

  const cartUnits = cart.map((product) => ({ units: 1, product }));
  const [cartState, setCartState] = useState(cartUnits);

  const handleMinus = (i) => {
    setCartState(
      cartState.map((product, j) =>
        j !== i ? product : { ...product, units: product.units > 1 ? product.units - 1 : 1 }
      )
    );
  };

  const handlePlus = (i) => {
    setCartState(
      cartState.map((product, j) => (j !== i ? product : { ...product, units: product.units + 1 }))
    );
  };

  let cartStorage = JSON.parse(localStorage.getItem("cart"));

  // Add generic price with its unit (Kg or L);
  const cartUltraAwesome = cartState.map((product) => {
    let unitsP = product.units;
    product.supermarkets = product.product.supermarkets.map((supermarket) => {
      const pricePer = supermarket.priceKg ? supermarket.priceKg : supermarket.priceL;
      const unit = supermarket.priceKg ? "€/Kg" : "€/L";
      return { ...supermarket, pricePer, unit, unitsP };
    });
    return product;
  });

  // Compra más barata
  const minProduct = cartUltraAwesome.map((product) =>
    product.supermarkets.reduce((prev, curr) => (prev.priceUd < curr.priceUd ? prev : curr))
  );

  const sumProduct = minProduct.reduce((acc, curr) => acc + curr.priceUd * curr.unitsP, 0);

  //Compra más barata por Kg/L
  const minProductPer = cartUltraAwesome.map((product) =>
    product.supermarkets.reduce((prev, curr) => (prev.pricePer < curr.pricePer ? prev : curr))
  );

  const sumProductPer = minProductPer.reduce((acc, curr) => acc + curr.pricePer, 0);

  // Compra más eficiente
  let carrefour = cartUltraAwesome.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "carrefour")
  );
  carrefour = carrefour.filter((product) => product);

  let alcampo = cartUltraAwesome.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "alcampo")
  );
  alcampo = alcampo.filter((product) => product);

  let dia = cartUltraAwesome.map((product) =>
    product.supermarkets.find((supermarket) => supermarket.supermarketName === "dia")
  );
  dia = dia.filter((product) => product);

  const carrefourPriceUd = {
    supermarket: carrefour,
    totalSum: carrefour.reduce((acc, curr) => acc + curr.priceUd * curr.unitsP, 0),
    totalSumPer: carrefour.reduce((acc, curr) => acc + curr.pricePer, 0),
  };

  const alcampoPriceUd = {
    supermarket: alcampo,
    totalSum: alcampo.reduce((acc, curr) => acc + curr.priceUd * curr.unitsP, 0),
    totalSumPer: alcampo.reduce((acc, curr) => acc + curr.pricePer, 0),
  };
  const diaPriceUd = {
    supermarket: dia,
    totalSum: dia.reduce((acc, curr) => acc + curr.priceUd * curr.unitsP, 0),
    totalSumPer: dia.reduce((acc, curr) => acc + curr.pricePer, 0),
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

  const maxProductsPrices = maxProductsSupermarkets.map((supermarket) => supermarket.totalSum);

  const minSupermarket = Math.min(...maxProductsPrices);
  const cheapestSupermarket = allSuper.find(
    (supermarket) => supermarket.totalSum === minSupermarket
  );

  // Prices Per. Probablemente se puede refactorizar y meterlo en lo de arriba.
  const maxProductsPricesPer = maxProductsSupermarkets.map(
    (supermarket) => supermarket.totalSumPer
  );

  const minSupermarketPer = Math.min(...maxProductsPricesPer);
  const cheapestSupermarketPer = allSuper.find(
    (supermarket) => supermarket.totalSumPer === minSupermarketPer
  );

  return (
    <section>
      <h2>LISTA DE LA COMPRA</h2>
      {cartState.map((productState, i) => {
        return (
          <div className="cart--container">
            <span id="cart--container--product-name">{productState.product.name}</span>
            <div className="cart--container--buttons">
              {!priceToggle && (
                <>
                  <button onClick={() => handleMinus(i)}>-</button>
                  <span id="cart--container--product-price">{productState.units}</span>
                  <button onClick={() => handlePlus(i)}>+</button>
                </>
              )}
              <div
                className="cart--container--binbox"
                onClick={() => {
                  cartStorage = cartStorage.filter(
                    (cartProduct) => cartProduct.name !== productState.product.name
                  );
                  setCartState(cartStorage.map((product) => ({ units: 1, product })));
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
        <div className="cart--cheapest__t">
          <h2>Compra más barata</h2>
          <h3>
            <span>Total: </span>
            {!priceToggle
              ? (Math.round(sumProduct * 100) / 100).toFixed(2) + " €"
              : (Math.round(sumProductPer * 100) / 100).toFixed(2) + " €/Kg"}
          </h3>
        </div>
        <div className="cart--cheapest__box">
          {!priceToggle
            ? minProduct.map((product) => {
                return (
                  <div className="cart--cheapest__info">
                    <div className="box">
                      <img src={product.logo} alt={product.supermarketName} />
                      <p>{product.productName}</p>
                    </div>
                    <span>
                      {product.priceUd}€ x {product.unitsP}
                    </span>
                  </div>
                );
              })
            : minProductPer.map((product) => {
                return (
                  <div className="cart--cheapest__info">
                    <div className="box">
                      <img src={product.logo} alt={product.supermarketName} />
                      <p>{product.productName}</p>
                    </div>
                    <span>
                      {product.pricePer} {product.unit}
                    </span>
                  </div>
                );
              })}
        </div>
      </div>

      <div className="cart--eficient">
        <div className="cart--cheapest__t">
          <h2>Compra mas eficiente</h2>
          <h3>
            <span>Total: </span>
            {!priceToggle
              ? (Math.round(cheapestSupermarket.totalSum * 100) / 100).toFixed(2) + " €"
              : (Math.round(cheapestSupermarket.totalSumPer * 100) / 100).toFixed(2) + " €/Kg"}
          </h3>
        </div>
        <div className="cart--eficient__box">
          {!priceToggle
            ? cheapestSupermarket.supermarket.map((product) => {
                return (
                  <div className="cart--eficient__info">
                    <div className="box">
                      <img src={product.logo} alt={product.supermarketName} />
                      <p>{product.productName}</p>
                    </div>
                    <span>
                      {product.priceUd}€ x {product.unitsP}
                    </span>
                  </div>
                );
              })
            : cheapestSupermarketPer.supermarket.map((product) => {
                return (
                  <div className="cart--eficient__info">
                    <div className="box">
                      <img src={product.logo} alt={product.supermarketName} />
                      <p>{product.productName}</p>
                    </div>
                    <span>
                      {product.pricePer} {product.unit}
                    </span>
                  </div>
                );
              })}
        </div>
      </div>

      <button className="show-more" onClick={() => setPriceToggle(!priceToggle)}>
        {priceToggle ? "Mostrar unidad" : "Mostrar Kg/L"}
      </button>
    </section>
  );
};

export default CompraEficiente;
