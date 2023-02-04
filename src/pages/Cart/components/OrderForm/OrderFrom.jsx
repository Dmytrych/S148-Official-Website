import React, { useState } from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import CityAutocomplete from '../CityAutocomplete';
import './index.css';
import ShowHideBox from '../../../../components/ShowHideBox';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

const novaPoshtaDelivery = "novaPoshta"
const novaPoshtaCourierDelivery = "novaPoshtaCourier"
const unselectedDelivery = "unselected"

function OrderForm({ errors, touched, handleChange, setFieldValue, values, handleSubmit }) {
    const [deliveryMethodsSelection, setDeliveryMethodsSelection] = useState({
        [novaPoshtaDelivery]: false,
        [novaPoshtaCourierDelivery]: false,
        [unselectedDelivery]: true
    })

    const handleDeliverySelection = (deliveryMethod) => {
        setFieldValue("deliveryInfo.type", deliveryMethod)
        var selectedDelivery = deliveryMethodsSelection[deliveryMethod] ? unselectedDelivery : deliveryMethod
        if (!deliveryMethodsSelection[selectedDelivery]) {
            Object.keys(deliveryMethodsSelection).forEach(method => deliveryMethodsSelection[method] = false)
            deliveryMethodsSelection[selectedDelivery] = true;
            setDeliveryMethodsSelection({ ...deliveryMethodsSelection })
        }
    }

    const handleCitySelection = (value) => {
        setFieldValue("deliveryInfo.data.cityGuidRef", value?.cityGuidRef || "")
    }

    return (
        <>
            <div><FormParagraphSign numberTag={1} text={locale.contact_info} /></div>
            <div className='order-page-content-info-block'>
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
            </div>
            <div onClick={handleSubmit}><FormParagraphSign numberTag={2} text={locale.delivery} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField onChange={handleChange} name="description"
                            label={locale.delivery_info} placeholder={locale.delivery_info_placeholder} value={values.description}
                            errorText={errors.description} error={touched.description && errors.description} />
                        {/* <ShowHideBox title={locale.nova_poshta} showContent={deliveryMethodsSelection[novaPoshtaDelivery]} onClick={() => handleDeliverySelection(novaPoshtaDelivery)}>
                            <div className='delivery-info-box'>
                                <CityAutocomplete setCitySelection={handleCitySelection} error={Boolean(touched.deliveryInfo?.data.cityGuidRef && errors.cityGuidRef)} />
                            </div>
                        </ShowHideBox> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;