import React from 'react'
import { locale } from '../../locale/ua';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import './index.css'

function Cart(){
    return (<div className='order-page'>
        <div className='order-page-caption'>
            <div><h2>{locale.order_placement}</h2></div>
            <div className='order-page-content'>
                <div className='order-page-content-block'>
                    <OrderForm />
                </div>
                <div className='order-summary-block'>
                    <CartSummary />
                </div>
            </div>
        </div>
    </div>)
}

export default Cart;