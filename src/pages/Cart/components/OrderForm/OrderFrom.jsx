import React, { useState } from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import CityAutocomplete from '../CityAutocomplete';
import WarehouseAutocomplete from '../WarehouseAutocomplete';
import './index.css';
import ShowHideBox from '../../../../components/ShowHideBox';
import { useEffect } from 'react';
import { useFormik } from 'formik';

const novaPoshtaDelivery = "novaPoshta"
const novaPoshtaCourierDelivery = "novaPoshtaCourier"
const unselectedDelivery = "unselected"

const validateCustomerInfo = customerData => {
    const errors = {}

    if(!customerData.name || customerData.name.length > 20){
        errors.name = locale.field_should_not_be_empty_or_too_big;
    }

    if(!customerData.middleName || customerData.middleName.length > 20){
        errors.middleName = locale.field_should_not_be_empty_or_too_big;
    }

    if(!customerData.surname || customerData.surname.length > 20){
        errors.surname = locale.field_should_not_be_empty_or_too_big;
    }

    const emailRegexp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if(!customerData.email || !emailRegexp.test(customerData.email)){
        errors.email = locale.field_should_contain_valid_email;
    }

    const phoneRegexp = new RegExp("(\\+380)(\\d{9})$");
    if(!customerData.phoneNumber || !phoneRegexp.test(customerData.phoneNumber)){
        errors.phoneNumber = locale.field_should_contain_valid_phone_number;
    }

    return errors
}

const validateDeliveryInfo = deliveryInfo => {
    const errors = {}

    if(!deliveryInfo.cityGuidRef){
        errors.cityGuidRef = locale.field_should_not_be_empty_or_too_big;
    }

    if(!deliveryInfo.warehouseNumber || deliveryInfo.warehouseNumber.length > 20){
        errors.warehouseNumber = locale.field_should_not_be_empty_or_too_big;
    }

    return errors
}

const getDefaultCitySelection = () => {
    return {
        name: "",
        cityGuidRef: ""
    }
}

function OrderForm() {
    const [citySelection, setCitySelection] = useState(getDefaultCitySelection());
    const [deliveryMethodsSelection, setDeliveryMethodsSelection] = useState({
        [novaPoshtaDelivery]: false,
        [novaPoshtaCourierDelivery]: false
    })
    const [selectedDelivery, setSelectedDelivery] = useState(unselectedDelivery)

    useEffect(() => {
        if(!deliveryMethodsSelection[selectedDelivery]){
            console.log(deliveryMethodsSelection)
            Object.keys(deliveryMethodsSelection).forEach(deliveryMethod => deliveryMethodsSelection[deliveryMethod] = false)
            deliveryMethodsSelection[selectedDelivery] = true;
            setDeliveryMethodsSelection({...deliveryMethodsSelection})
        }
    }, [selectedDelivery])

    const handleDeliverySelection = (deliveryMethod) => {
        setSelectedDelivery(
            deliveryMethodsSelection[deliveryMethod]
            ? unselectedDelivery
            : deliveryMethod
        )
    }

    const handleCitySelection = (value) => {
        setCitySelection(value || getDefaultCitySelection())
        novaPoshtaDeliveryInfo.setFieldValue("cityGuidRef", value?.cityGuidRef || "")
    }

    const handleWarehouseSelection = (value) => {
        novaPoshtaDeliveryInfo.setFieldValue("warehouseNumber", value?.warehouseNumber || "")
    }

    const formikCustomerInfo = useFormik({
        initialValues: {
            name: '',
            middleName: '',
            surname: '',
            email: '',
            phoneNumber: ''
        },
        validate: validateCustomerInfo,
        onSubmit: values=>{
          alert(JSON.stringify(values));
        }
    })

    const novaPoshtaDeliveryInfo = useFormik({
        initialValues: {
            cityGuidRef: '',
            warehouseNumber: ''
        },
        validate: validateDeliveryInfo,
        onSubmit: values=>{
          alert(JSON.stringify(values));
        }
    })

    return (
        <>
            <div><FormParagraphSign numberTag={1} text={locale.contact_info} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField onChange={formikCustomerInfo.handleChange} name="name" 
                            label={locale.name} placeholder={locale.name_placeholder} value={formikCustomerInfo.values.name}
                            errorText={formikCustomerInfo.errors.name} error={formikCustomerInfo.touched.name && formikCustomerInfo.errors.name}/>
                        <FormField onChange={formikCustomerInfo.handleChange} name="middleName"
                            label={locale.middle_name} placeholder={locale.middle_name_placeholder} value={formikCustomerInfo.values.middleName}
                            errorText={formikCustomerInfo.errors.middleName} error={formikCustomerInfo.touched.middleName && formikCustomerInfo.errors.middleName}/>
                        <FormField onChange={formikCustomerInfo.handleChange} name="surname"
                            label={locale.surname} placeholder={locale.surname_placeholder} value={formikCustomerInfo.values.surname}
                            errorText={formikCustomerInfo.errors.surname} error={formikCustomerInfo.touched.surname && formikCustomerInfo.errors.surname}/>
                        <FormField onChange={formikCustomerInfo.handleChange} name="email"
                            label={locale.email} placeholder={locale.email_placeholder} value={formikCustomerInfo.values.email}
                            errorText={formikCustomerInfo.errors.email} error={formikCustomerInfo.touched.email && formikCustomerInfo.errors.email}/>
                        <FormField onChange={formikCustomerInfo.handleChange} name="phoneNumber"
                            label={locale.phone_number} placeholder={locale.phone_number_placeholder} value={formikCustomerInfo.values.phoneNumber}
                            errorText={formikCustomerInfo.errors.phoneNumber} error={formikCustomerInfo.touched.phoneNumber && formikCustomerInfo.errors.phoneNumber}/>
                    </div>
                </div>
            </div>
            <div onClick={() => {  novaPoshtaDeliveryInfo.handleSubmit();}}><FormParagraphSign numberTag={2} text={locale.delivery} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <ShowHideBox title={locale.nova_poshta} showContent={deliveryMethodsSelection[novaPoshtaDelivery]} onClick={() => handleDeliverySelection(novaPoshtaDelivery)}>
                            <div className='delivery-info-box'>
                                <CityAutocomplete setCitySelection={handleCitySelection} error={Boolean(novaPoshtaDeliveryInfo.touched.cityGuidRef && novaPoshtaDeliveryInfo.errors.cityGuidRef)}/>
                                <WarehouseAutocomplete
                                    cityName={citySelection.name}
                                    cityGuidRef={citySelection.cityGuidRef}
                                    setWarehouseSelection={handleWarehouseSelection}
                                    error={Boolean(novaPoshtaDeliveryInfo.touched.warehouseNumber && novaPoshtaDeliveryInfo.errors.warehouseNumber)} />
                            </div>
                        </ShowHideBox>
                        <ShowHideBox title={locale.nova_poshta_courier_delivery} showContent={deliveryMethodsSelection[novaPoshtaCourierDelivery]} onClick={() => handleDeliverySelection(novaPoshtaCourierDelivery)}>
                            <div className='delivery-info-box'>
                                <CityAutocomplete setCitySelection={handleCitySelection} />
                                <FormField label={locale.phone_number} placeholder={locale.phone_number_placeholder} />
                            </div>
                        </ShowHideBox>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;