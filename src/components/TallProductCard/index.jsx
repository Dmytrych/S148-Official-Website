import { useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import PlusMinusControl from '../PlusMinusControl';
import RoundedButton from '../RoundedButton';
import './index.css'

function TallProductCard({className, product}) {
    const cartContext = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)
    const decreaseButtonClick = () => { quantity > 0 && setQuantity(quantity - 1) }
    const increaseButtonClick = () => setQuantity(quantity + 1)

    const updateCart = () => {
        cartContext.cart[product.id] = {
            id: product.id,
            quantity: quantity
        }
        cartContext.saveCart({...cartContext.cart})
    }

    return (<div className={`tall-product-card ${className}`}>
        <h6>{product.name}</h6>
        <PlusMinusControl value={quantity} decreaseButtonClick={decreaseButtonClick} increaseButtonClick={increaseButtonClick}/>
        <h6>{product.unitPrice * quantity}</h6>
        <RoundedButton text={locale.buy} onClick={updateCart}/>
    </div>)
}

export default TallProductCard;