import { Formik, useFormik } from 'formik';
import React, { useState } from 'react'
import { locale } from '../../locale/ua';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import './index.css'

const initialValues = {
    name: '',
    middleName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    deliveryInfo: {
        type: '',
        data: {
            cityGuidRef: '',
            warehouseNumber: '',
            courierDelivery: false,
            address: ''
        }
    }
}

function Cart(){
    return (<div className='order-page'>
        <div className='order-page-caption page-content-wrapper'>
            <div><h2>{locale.order_placement}</h2></div>
            <Formik 
                    initialValues={initialValues}
                    validate={() => {}}
                    onSubmit={(values) => {alert(JSON.stringify(values))}}
                    children={props => (
                        <div className='page-content-block order-page-content'>
                            <div className='order-page-content-block'>
                                <OrderForm {...props} />
                            </div>
                            <div className='order-summary-block'>
                                <CartSummary/>
                            </div>
                        </div>
                    )}/>
        </div>
    </div>)
}

export default Cart;