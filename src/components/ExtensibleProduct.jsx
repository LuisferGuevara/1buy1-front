import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "../styles/Product.scss";
import { useSelector } from "react-redux";

function ExpandedCard({ product, onCollapse }) {

	const { token } = useSelector(state => state.auth)

	const { supermarkets } = product;

	let minUd = supermarkets.reduce((prev, curr) => (prev.priceUd < curr.priceUd ? prev : curr)).priceUd;
	let minKg = supermarkets.reduce((prev, curr) => (prev.priceKg < curr.priceKg ? prev : curr)).priceKg;
	let minL = supermarkets.reduce((prev, curr) => (prev.priceL < curr.priceL ? prev : curr)).priceL;

	const [priceToggle, setPriceToggle] = useState(false);

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
									{priceToggle ? (
										<p id="price--unit" className={supermarket.priceUd === minUd ? "cheapest" : ""}>{supermarket.priceUd}€</p>
									) : (
										<>
											{supermarket.priceKg && <p className={supermarket.priceKg === minKg ? "cheapest" : ""}>{supermarket.priceKg} €/Kg</p>}
											{supermarket.priceL && <p className={supermarket.priceL === minL ? "cheapest" : ""}>{supermarket.priceL} €/L</p>}
											{(!supermarket.priceL && !supermarket.priceKg) && <p>Precio no disponible</p>}
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="card--button">
					<button onClick={() => setPriceToggle(!priceToggle)}>
						{priceToggle ? "Mostrar precio Kg/L" : "Mostrar precio unidad"}
					</button>
					{token && <img src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670257472/icons/addToCart-09_ikgf0i.svg" alt="Añadir al carrito"/>}
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
