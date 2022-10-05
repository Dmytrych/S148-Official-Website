import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import { getLocalCart } from '../../repositories/cartRepository';
import PlusMinusControl from '../PlusMinusControl';
import RoundedButton from '../RoundedButton';
import './index.css'

const defaultProductQuantity = 1

//TODO: move the state management to the above standing component
function TallProductCard({className, product}) {
    const cartContext = useContext(CartContext)

    const [quantity, setQuantity] = useState(defaultProductQuantity)
    const decreaseButtonClick = () => { quantity > 0 && setQuantity(quantity - 1) }
    const increaseButtonClick = () => setQuantity(quantity + 1)

    const updateCart = () => {
        if(cartContext.cart[product.id]){
            cartContext.cart[product.id].quantity += quantity
        }
        else {
            cartContext.cart[product.id] = {
                id: product.id,
                quantity: quantity
            }
        }
        setQuantity(defaultProductQuantity)
        cartContext.saveCart({...cartContext.cart})
    }

    return (<div className={`tall-product-card ${className}`}>
        <h6>{product.name}</h6>
        <PlusMinusControl value={quantity} decreaseButtonClick={decreaseButtonClick} increaseButtonClick={increaseButtonClick}/>
        <h6>{product.unitPrice * quantity}</h6>
        <h6>{locale.in_your_cart}:{cartContext.cart[product.id].quantity ?? 0}</h6>
        <RoundedButton text={locale.buy} onClick={updateCart}/>
    </div>)
}

export default TallProductCard;