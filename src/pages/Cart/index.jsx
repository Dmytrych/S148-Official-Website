import { Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import { getAllProductsFiltered } from '../../repositories/api';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import './index.css'


const validateForm = values => {
    const errors = {}
    if (!values.name || values.name.length > 20) {
        errors.name = locale.field_should_not_be_empty_or_too_big;
    }
    if (!values.middleName || values.middleName.length > 20) {
        errors.middleName = locale.field_should_not_be_empty_or_too_big;
    }
    if (!values.surname || values.surname.length > 20) {
        errors.surname = locale.field_should_not_be_empty_or_too_big;
    }
    const emailRegexp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (!values.email || !emailRegexp.test(values.email)) {
        errors.email = locale.field_should_contain_valid_email;
    }
    const phoneRegexp = new RegExp("(\\+380)(\\d{9})$");
    if (!values.phoneNumber || !phoneRegexp.test(values.phoneNumber)) {
        errors.phoneNumber = locale.field_should_contain_valid_phone_number;
    }
    if (!values.deliveryInfo.data.cityGuidRef) {
        errors.cityGuidRef = locale.field_should_not_be_empty_or_too_big;
    }
    if (!values.deliveryInfo.data.courierDelivery && (!values.deliveryInfo.data.warehouseNumber || isNaN(values.deliveryInfo.data.warehouseNumber))) {
        errors.warehouseNumber = locale.field_should_not_be_empty_or_too_big;
    }
    if (values.deliveryInfo.data.courierDelivery && (!values.deliveryInfo.data.address || values.deliveryInfo.data.address.length > 100)) {
        errors.address = locale.field_should_not_be_empty;
    }
    return errors
}

const handleSubmit = (values) => {
    const dataModel = {
        warehouseNumber: 0,
        cityGuidRef: "",
        customerModel: {
            name: "",
            surname: "",
            middleName: "",
            phoneNumber: "",
            email: ""
        },
        products: [
            {
                ProductId: 0,
                quantity: 0
            }
        ]
    }
}

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

function Cart() {
    let navigate = useNavigate();
    const dataLoaded = useRef(false)
    const [products, setProducts] = useState([])
    const cartContext = useContext(CartContext)

    const handleRemoveCartItem = (productId) => {
        delete cartContext.cart[productId]
        setProducts(products.filter(product => product.id != productId))
        cartContext.saveCart({...cartContext.cart})
    }

    useEffect(() => {
        if(!dataLoaded.current){
            async function fetchData() {
                const productIds = Object.keys(cartContext.cart)
                const retrievedProducts = await getAllProductsFiltered(productIds)
                retrievedProducts.map(product => product.quantity = cartContext.cart[product.id])
                setProducts(retrievedProducts)
            }

            fetchData();

            return () => {dataLoaded.current = true}
        }
        if(Object.keys(cartContext.cart).length <= 0){
            navigate('/')
        }
    }, [cartContext]);

    return (<div className='order-page'>
        <div className='order-page-caption page-content-wrapper'>
            <div><h2>{locale.order_placement}</h2></div>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={(values) => alert(JSON.stringify(values))}
                children={props => (
                    <div className='page-content-block order-page-content'>
                        <div className='order-page-content-block'>
                            <OrderForm {...props} />
                        </div>
                        <div className='order-summary-block'>
                            <CartSummary
                                handleSubmit={props.handleSubmit}
                                disableSubmit={!props.touched || !props.isValid}
                                products={products}
                                removeCartItem={handleRemoveCartItem} />
                        </div>
                    </div>
                )} />
        </div>
    </div>)
}

export default Cart;