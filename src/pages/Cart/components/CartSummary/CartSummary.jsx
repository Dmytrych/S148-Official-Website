import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../../../contexts/CartContext';
import { locale } from '../../../../locale/ua';
import './index.css'

function CartSummary(){
    const [products, setProducts] = useState([])
    const cartContext = useContext(CartContext)
    
    useEffect(() => {
        const cartEntries = Object.entries(cartContext.cart);
        if(cartEntries && cartEntries.length > 0){
            setProducts(cartEntries.map(getProductValue))
        }
      }, [cartContext.cart]);

    return (
    <div className='order-summary'>
        <h2>{locale.total}</h2>
        <div>
            {products.map(product => {
                return <div key={product.id} className='order-product-summary-line'>
                    <div>
                        {product.quantity}x {product.name}
                    </div>
                    <div>
                        {product.quantity * product.unitPrice}₴
                    </div>
                </div>
            })}
        </div>
        <div className='order-total-cost-line'>
            <div>
                {locale.to_be_paid}
            </div>
            <div>
                {products.reduce((acc, product) => acc + (product.unitPrice * product.quantity), 0)}₴
            </div>
        </div>
    </div>)
}

const getProductValue = (productKeyValue) => {
    return productKeyValue[1]
}

const getProductId = (productKeyValue) => {
    return productKeyValue[0]
}

export default CartSummary;