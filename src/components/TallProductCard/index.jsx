import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import { getLocalCart } from '../../repositories/cartRepository';
import PlusMinusControl from '../PlusMinusControl';
import RoundedButton from '../RoundedButton';
import bottleImage from './bottle.png';
import './index.css';

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
                ...product,
                quantity: quantity
            }
        }
        setQuantity(defaultProductQuantity)
        cartContext.saveCart({...cartContext.cart})
    }

    return (<div className={`tall-product-card ${className}`}>
        <div className='product-title-image-box'>
            <img src={bottleImage}/>
        </div>
        <span className='product-name-text'>{product.name}</span>
        {/* <div>
            <span>{locale.in_your_cart}:{cartContext.cart[product.id].quantity ?? 0}</span>
            <PlusMinusControl value={quantity} decreaseButtonClick={decreaseButtonClick} increaseButtonClick={increaseButtonClick}/>
        </div> */}
        <div className='product-price-box'>
            <span className='product-price-tag'>{product.unitPrice * quantity} ₴</span>
            <RoundedButton text={locale.buy} onClick={updateCart}/>
        </div>
    </div>)
}

export default TallProductCard;