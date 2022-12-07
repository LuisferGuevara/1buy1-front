import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters";
import ExpandibleProduct from "../components/ExtensibleProduct";
import { getProducts } from "../redux/Products/products.functions";
import "../styles/Comparator.scss";

const Comparator = () => {
  const dispatch = useDispatch();
  const { filter, products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    getProducts(dispatch);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({ type: "setCategory", payload: products });
  }, [products, dispatch]);

  return (
    <div className="comparator--section">
      <Filters />
      <div className="products--billboard">
      { isLoading && <h1>Cargando Productos... </h1>}
        {filter.map((product) => (
          <ExpandibleProduct product={product} key={JSON.stringify(product)} />
        ))}
      </div>
    </div>
  );
};

export default Comparator;
