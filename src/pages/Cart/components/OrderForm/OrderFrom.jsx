import React from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import './index.css';
import CartProductList from "../CartProductList";
import {styled} from "@mui/material";

function OrderForm({ errors, touched, handleChange, setFieldValue, values, handleSubmit }) {
    return (
        <>
            <div><FormParagraphSign numberTag={1} text={locale.contact_info} /></div>
            <OrderPageContentInfoBlock>
                <CartProductList/>
            </OrderPageContentInfoBlock>
            <div><FormParagraphSign numberTag={2} text={locale.contact_info} /></div>
            <OrderPageContentInfoBlock>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField onChange={handleChange} name="name"
                            label={locale.name} placeholder={locale.name_placeholder} value={values.name}
                            errorText={errors.name} error={touched.name && errors.name} />
                        <FormField onChange={handleChange} name="middleName"
                            label={locale.middle_name} placeholder={locale.middle_name_placeholder} value={values.middleName}
                            errorText={errors.middleName} error={touched.middleName && errors.middleName} />
                        <FormField onChange={handleChange} name="surname"
                            label={locale.surname} placeholder={locale.surname_placeholder} value={values.surname}
                            errorText={errors.surname} error={touched.surname && errors.surname} />
                        <FormField onChange={handleChange} name="email"
                            label={locale.email} placeholder={locale.email_placeholder} value={values.email}
                            errorText={errors.email} error={touched.email && errors.email} />
                        <FormField onChange={handleChange} name="phoneNumber"
                            label={locale.phone_number} placeholder={locale.phone_number_placeholder} value={values.phoneNumber}
                            errorText={errors.phoneNumber} error={touched.phoneNumber && errors.phoneNumber} />
                    </div>
                </div>
            </OrderPageContentInfoBlock>
            <div onClick={handleSubmit}><FormParagraphSign numberTag={3} text={locale.delivery} /></div>
            <OrderPageContentInfoBlock>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField onChange={handleChange} name="description"
                            label={locale.delivery_info} placeholder={locale.delivery_info_placeholder} value={values.description}
                            errorText={errors.description} error={touched.description && errors.description} />
                    </div>
                </div>
            </OrderPageContentInfoBlock>
        </>
    )
}

export default OrderForm;

const OrderPageContentInfoBlock = styled('div')({
    marginLeft: '2rem',
    padding: '20px 15px',
})