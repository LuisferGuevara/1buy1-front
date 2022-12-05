import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "../styles/Product.scss";

function ExpandedCard({ product, onCollapse }) {
  const { supermarkets } = product;

  return (
    <>
      <motion.p
        className="expanded secondary"
        onClick={onCollapse}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div className="card--expanded" layoutId="expandable-card">
        <div className="card--expanded__top-section">
		<div className="card--expanded__d">
          <div className="card--expanded__top-section--img">
            <img src={product.img} alt={product.name} />
          </div>
          <h4>{product.name}</h4>
		</div>
          <button onClick={onCollapse}>X</button>
        </div>
        <div className="comparator--info__box">
          {supermarkets.map((supermarket) => (
            <div key={supermarket._id} className="comparator--info">
              <div className="comparator--info__img">
                <img src={supermarket.logo} alt={supermarket.supermarketName} />
              </div>
              <div className="comparator--info__metatext">
                <p>{supermarket.productName}</p>
				<div className="comparator--prices">

                <p id="price--unit">{supermarket.priceUd}€</p>
                {supermarket.priceKg && <p>{supermarket.priceKg} €/Kg</p>}
                {supermarket.priceL && <p>{supermarket.priceL} €/L</p>}
				</div>
              </div>
            </div>
          ))}
        </div>
        <div className="card--button">
          <button>Precio Unidad</button>
        </div>
      </motion.div>
    </>
  );
}

function CompactCard({ product, onExpand }) {
	return (
		<motion.div className="food-item" layoutId="expandable-card" onClick={onExpand}>
			<div className="food-item__image">
				<img src={product.img} alt={product.name} />
			</div>
			<h2>{product.name}</h2>
		</motion.div>
	);
}

const ExpandibleProduct = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
  };

  const expandDate = () => {
    setIsExpanded(true);
  };

  return (
    <div className="card-container">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} product={product} />
        ) : (
          <CompactCard onExpand={expandDate} product={product} />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default ExpandibleProduct;
