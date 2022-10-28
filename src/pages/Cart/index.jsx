import React, { useContext, useEffect, useState } from 'react'
import FormField from '../../components/FormField';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import FormParagraphSign from './components/FormParagraphSign';
import './index.css'

function Cart(){
    const [products, setProducts] = useState([])
    const cartContext = useContext(CartContext)
    
    useEffect(() => {
        const cartEntries = Object.entries(cartContext.cart);
        if(cartEntries && cartEntries.length > 0){
            setProducts(cartEntries.map(getProductValue))
        }
      }, [cartContext.cart]);

    return (<div className='order-page'>
        <div className='order-page-caption'>
            <div><h2>{locale.order_placement}</h2></div>
            <div className='order-page-content'>
                <div className='order-page-content-block'>
                    <div><FormParagraphSign numberTag={0} text='asdasd'/></div>
                    <div className='flex-column'>
                        <div className='credentials-block'>
                            <div className='form-field'>
                                <FormField header="Name"/>
                            </div>
                            <div className='form-field'>
                                <FormField header="Name"/>
                            </div>
                        </div>
                        <div className='credentials-block'>
                        <div className='form-field'>
                                <FormField header="Name"/>
                            </div>
                            <div className='form-field'>
                                <FormField header="Name"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-summary-block'>
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
                    </div>
                </div>
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

export default Cart;