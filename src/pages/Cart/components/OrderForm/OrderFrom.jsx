import React, { useState } from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import CityAutocomplete from '../CityAutocomplete';
import WarehouseAutocomplete from '../WarehouseAutocomplete';
import './index.css';
import ShowHideBox from '../../../../components/ShowHideBox';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Form } from 'formik';

const novaPoshtaDelivery = "novaPoshta"
const novaPoshtaCourierDelivery = "novaPoshtaCourier"
const unselectedDelivery = "unselected"

const validateCustomerInfo = customerData => {
    const errors = {}

    if (!customerData.name || customerData.name.length > 20) {
        errors.name = locale.field_should_not_be_empty_or_too_big;
    }

    if (!customerData.middleName || customerData.middleName.length > 20) {
        errors.middleName = locale.field_should_not_be_empty_or_too_big;
    }

    if (!customerData.surname || customerData.surname.length > 20) {
        errors.surname = locale.field_should_not_be_empty_or_too_big;
    }

    const emailRegexp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (!customerData.email || !emailRegexp.test(customerData.email)) {
        errors.email = locale.field_should_contain_valid_email;
    }

    const phoneRegexp = new RegExp("(\\+380)(\\d{9})$");
    if (!customerData.phoneNumber || !phoneRegexp.test(customerData.phoneNumber)) {
        errors.phoneNumber = locale.field_should_contain_valid_phone_number;
    }

    return errors
}

const validateDeliveryInfo = deliveryInfo => {
    const errors = {}

    if (!deliveryInfo.cityGuidRef) {
        errors.cityGuidRef = locale.field_should_not_be_empty_or_too_big;
    }

    if (!deliveryInfo.courierDelivery && (!deliveryInfo.warehouseNumber || deliveryInfo.warehouseNumber.length > 20)) {
        errors.warehouseNumber = locale.field_should_not_be_empty_or_too_big;
    }

    if (deliveryInfo.courierDelivery && (!deliveryInfo.address || deliveryInfo.address.length > 100)) {
        errors.address = locale.field_should_not_be_empty;
    }

    return errors
}

const getDefaultCitySelection = () => {
    return {
        name: "",
        cityGuidRef: ""
    }
}

const getDefaultWarehouseSelection = () => {
    return {
        cityName: '',
        cityGuidRef: '',
        name: '',
        warehouseGuidRef: '',
        warehouseNumber: ''
    }
}

function OrderForm({ errors, touched, handleChange, setFieldValue, values, handleSubmit }) {
    const [citySelection, setCitySelection] = useState(getDefaultCitySelection());
    const [warehouseSelection, setWarehouseSelection] = useState(getDefaultWarehouseSelection());
    const [courierDeliverySelection, setCourierDeliverySelection] = useState(false)
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
        setCitySelection(value || getDefaultCitySelection())
        setWarehouseSelection(getDefaultWarehouseSelection())
        setFieldValue("deliveryInfo.data.cityGuidRef", value?.cityGuidRef || "")
    }

    const handleWarehouseSelection = (value) => {
        setWarehouseSelection(value)
        setFieldValue("deliveryInfo.data.warehouseNumber", value?.warehouseNumber || "")
    }

    const handleCourierSelectionChange = (event) => {
        handleChange(event);
        setCourierDeliverySelection(event.target.checked);
    }

    return (
        <>
            <div><FormParagraphSign numberTag={1} text={locale.contact_info} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <Form>
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
                        </Form>
                    </div>
                </div>
            </div>
            <div onClick={handleSubmit}><FormParagraphSign numberTag={2} text={locale.delivery} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <ShowHideBox title={locale.nova_poshta} showContent={deliveryMethodsSelection[novaPoshtaDelivery]} onClick={() => handleDeliverySelection(novaPoshtaDelivery)}>
                            <div className='delivery-info-box'>
                                <CityAutocomplete setCitySelection={handleCitySelection} error={Boolean(touched.deliveryInfo?.data.cityGuidRef && errors.deliveryInfo?.data.cityGuidRef)} />
                                <FormControlLabel control={<Checkbox onChange={handleCourierSelectionChange} name="deliveryInfo.data.courierDelivery" />} label={locale.courier_delivery} />
                                {!courierDeliverySelection
                                    ? <WarehouseAutocomplete
                                        cityName={citySelection.name}
                                        cityGuidRef={citySelection.cityGuidRef}
                                        setWarehouseSelection={handleWarehouseSelection}
                                        error={Boolean(touched.deliveryInfo?.data.warehouseNumber && errors.deliveryInfo?.data.warehouseNumber)}/>
                                    : <FormField onChange={handleChange} name="deliveryInfo.data.address"
                                        label={locale.courier_delivery_info} placeholder={locale.courier_delivery_placeholder} value={values.deliveryInfo?.data.address}
                                        errorText={errors.deliveryInfo?.data.address} error={touched.deliveryInfo?.data.address && errors.deliveryInfo?.data.address} />}
                            </div>
                        </ShowHideBox>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;