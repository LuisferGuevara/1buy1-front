import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters";
import Product from "../components/Product";
import { getProducts } from "../redux/Products/products.functions";
import "../styles/Comparator.scss";

const Comparator = () => {
  const dispatch = useDispatch();
  const { filter, products } = useSelector((state) => state.products);

  useEffect(() => {
    getProducts(dispatch);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({type: 'setFilter', payload: products});
  }, [products, dispatch])

  return (
    <div className="comparator--section">
      <Filters />
      <div className="products--billboard">
        {filter.map((product) => (
          <Product product={product} key={JSON.stringify(product)} />
        ))}
      </div>
    </div>
  );
};

export default Comparator;
