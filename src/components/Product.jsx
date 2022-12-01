import React from 'react'
import "../styles/Product.scss"

const Product = ({product}) => {
    
  return (
    <div className='food-item'>
        <div className='food-item__image'>
            <img src={product.img} alt={product.name}/>
        </div>
        <h2>{product.name}</h2>
    </div>
  )
}

export default Product