import React, { useState } from "react";
import "../styles/Product.scss";

const Product = ({ product }) => {
  const [detail, setDetail] = useState(true);
  const { supermarkets } = product;

  const clickHandler = (product) => {
    setDetail(false);
  };

  return (
    <>
      {detail ? (
        <div className="food-item" onClick={() => clickHandler(product)}>
          <div className="food-item__image">
            <img src={product.img} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
        </div>
      ) : (
        <div>
          {supermarkets.map((supermarket) => (
            <div key={supermarket._id}>
              <p> {supermarket.supermarketName} </p>
              <div>
                <img src={supermarket.logo} alt={supermarket.supermarketName} />
              </div>
              <p>{supermarket.productName}</p>
              <p>{supermarket.priceUd} €</p>
              {supermarket.priceKg && <p>{supermarket.priceKg} €/Kg</p>}
              {supermarket.priceL && <p>{supermarket.priceL} €/L</p>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
