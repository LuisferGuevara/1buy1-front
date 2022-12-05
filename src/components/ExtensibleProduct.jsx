import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

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
			<motion.div className="card expanded" layoutId="expandable-card">
				<button onClick={onCollapse}>X</button>
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

const ExpandibleProduct = ({product}) => {
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