import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import './index.css'

function Cart(){
    const cartContext = useContext(CartContext)

    return (<div className='order-page'>
        <div className='order-page-content'>
            <div className='order-page-content-block'>
                <div className=''>
                    asdasdasd
                </div>
            </div>
            <div className='order-summary-block'>
                <div className='order-summary'>
                    <span>{locale.total}</span>
                    <div>
                        {cartContext.cart.map(product => {
                            <div key={product.id}>
                                {product.quantity}x {product.name}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Cart;