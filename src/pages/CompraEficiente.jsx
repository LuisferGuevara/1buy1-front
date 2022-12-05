import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/Auth/auth.functions'

const CompraEficiente = () => {

    const dispatch = useDispatch()

    const cart = localStorage.getItem("cart")

  return (
    <div>
        <h2>LISTA DE LA COMPRA</h2>
        {cart.map(product => {
            <div>
                <span>{product.name}</span>
                <div onClick={removeFromCart(cart, product, dispatch)}><img src='https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670256609/icons/cartListIcons-08_cwelaa.svg' alt='Papelera'/></div>
            </div>
        })}
    </div>
  )
}

export default CompraEficiente