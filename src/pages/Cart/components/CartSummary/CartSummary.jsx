import React, { useContext, useEffect, useRef, useState } from 'react'
import RoundedButton from '../../../../components/RoundedButton';
import CartContext from '../../../../contexts/CartContext';
import { locale } from '../../../../locale/ua';
import './index.css'

function CartSummary({ handleSubmit, disableSubmit, products }) {

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
            <div className='order-confirm-button'>
                <RoundedButton text={locale.confirm_order} size='medium' disabled={disableSubmit} onClick={handleSubmit} />
            </div>
        </div>)
}

export default CartSummary;