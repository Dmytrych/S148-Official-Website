import { Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { locale } from '../../locale/ua';
import { create, getAllProductsFiltered } from '../../repositories/api';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import './index.css'


const validateForm = values => {
    const errors = {}
    if (!values.name || values.name.length > 20) {
        errors.name = locale.field_should_not_be_empty_or_bigger_than_20;
    }
    if (!values.middleName || values.middleName.length > 20) {
        errors.middleName = locale.field_should_not_be_empty_or_bigger_than_20;
    }
    if (!values.surname || values.surname.length > 20) {
        errors.surname = locale.field_should_not_be_empty_or_bigger_than_20;
    }
    const emailRegexp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (!values.email || !emailRegexp.test(values.email)) {
        errors.email = locale.field_should_contain_valid_email;
    }
    const phoneRegexp = new RegExp("(\\+380)(\\d{9})$");
    if (!values.phoneNumber || !phoneRegexp.test(values.phoneNumber)) {
        errors.phoneNumber = locale.field_should_contain_valid_phone_number;
    }
    if (!values.description || values.description.length > 100) {
        errors.description = locale.field_should_not_be_empty_or_bigger_than_100;
    }
    return errors
}

const initialValues = {
    name: '',
    middleName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    description: ''
}

function Cart() {
    let navigate = useNavigate();
    const dataLoaded = useRef(false)
    const [products, setProducts] = useState([])
    const cartContext = useContext(CartContext)

    const handleSubmit = async (values) => {
        const dataModel = {
            description: values.description,
            customerModel: {
                name: values.name,
                surname: values.surname,
                middleName: values.middleName,
                phoneNumber: values.phoneNumber,
                email: values.email
            },
            products: products.map(product => ({
                productId: product.id,
                quantity: product.quantity
            }))
        }

        await create('novaPoshta', dataModel)
    }

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
                validateOnMount
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleSubmit}
                children={props => (
                    <div className='page-content-block order-page-content'>
                        <div className='order-page-content-block'>
                            <OrderForm {...props} />
                        </div>
                        <div className='order-summary-block'>
                            <CartSummary
                                handleSubmit={props.handleSubmit}
                                disableSubmit={!props.isValid}
                                products={products}
                                removeCartItem={handleRemoveCartItem} />
                        </div>
                    </div>
                )} />
        </div>
    </div>)
}

export default Cart;