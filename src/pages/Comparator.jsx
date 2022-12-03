import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters";
import Product from "../components/Product";
import { getProducts } from "../redux/Products/products.functions";
import "../styles/Comparator.scss";

const Comparator = () => {
  const dispacth = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    getProducts(dispacth);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comparator--section">
      <Filters />
      {products.map((product) => (
        <Product product={product} key={JSON.stringify(product)} />
      ))}
    </div>
  );
};

export default Comparator;
