import { Formik } from 'formik';
import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { locale } from '../../locale/ua';
import { create, getAllProductsFiltered } from '../../repositories/api';
import CartSummary from './components/CartSummary';
import OrderForm from './components/OrderForm/OrderFrom';
import './index.css'
import {useProductInCart} from "../../hooks/useProductInCart";
import {styled} from "@mui/material";

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
    const [ cartProducts, setCartProducts ] = useState([])
    const [ cart, addToCartOrUpdateQuantity, removeProductsFromCart, clearCart ] = useProductInCart()

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
            products: cartProducts.map(cartProduct => ({
                productId: cartProduct.product.id,
                quantity: cartProduct.quantity
            }))
        }

        await create('novaPoshta', dataModel)

        clearCart()
        navigate('/')
    }

    const handleRemoveCartItem = (cartProduct) => {
        removeProductsFromCart([cartProduct])
    }

    useEffect(() => {
        if (!dataLoaded.current){
            async function fetchData() {
                const productIds = cart.map((cartProduct) => cartProduct.productId)
                const retrievedProducts = await getAllProductsFiltered(productIds)
                const successfullyFoundProducts = []
                const failedToFindCartProducts = []

                cart.forEach((cartProduct) => {
                    const retrievedProduct = retrievedProducts.find((retrievedProduct) => retrievedProduct.id === cartProduct.productId)
                    if (!retrievedProduct){
                        failedToFindCartProducts.push(cartProduct)
                        return;
                    }

                    successfullyFoundProducts.push({
                        selectedOptions: cartProduct.selectedOptions,
                        product: retrievedProduct,
                        quantity: cartProduct.quantity
                    })
                })

                console.log(successfullyFoundProducts)
                setCartProducts(successfullyFoundProducts)
                removeProductsFromCart(failedToFindCartProducts)
            }

            fetchData();

            return () => { dataLoaded.current = true }
        }
        if (cart.length <= 0){
            navigate('/')
        }
    }, [ cart ]);

    return (<CartPageBackground>
        <CartPageBox>
            <div><h2>{locale.order_placement}</h2></div>
            <Formik
                validateOnMount
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleSubmit}
                children={props => (
                    <OrderContentContainer>
                        <OrderPageContentBlock>
                            <OrderForm {...props} />
                        </OrderPageContentBlock>
                        <OrderSummaryBlock>
                            <CartSummary
                                handleSubmit={props.handleSubmit}
                                disableSubmit={!props.isValid}
                                cartProducts={cartProducts}
                                removeCartItem={handleRemoveCartItem} />
                        </OrderSummaryBlock>
                    </OrderContentContainer>
                )} />
        </CartPageBox>
    </CartPageBackground>)
}

export default Cart;

const CartPageBackground = styled('div')({
    minHeight: '90vh',
    background: 'var(--order-form-gradient)',
})

const CartPageBox = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const OrderContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '80vw',
})

const OrderPageContentBlock = styled('div')({
    flex: '3',
    backgroundColor: 'var(--order-page-content-block-color)',
    padding: '19px 32px',
    wordBreak: 'break-all',
})

const OrderSummaryBlock = styled('div')({
    flex: '1',
    fontWeight: 'var(--order-page-highlight-font-weight)'
})