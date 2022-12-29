import React, { useState } from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import CityAutocomplete from '../CityAutocomplete';
import WarehouseAutocomplete from '../WarehouseAutocomplete';
import './index.css';
import ShowHideBox from '../../../../components/ShowHideBox';
import { useEffect } from 'react';

const novaPoshtaDelivery = "novaPoshta"
const novaPoshtaCourierDelivery = "novaPoshtaCourier"
const unselectedDelivery = "unselected"

function OrderForm() {
    const [citySelection, setCitySelection] = useState({
        name: "",
        cityGuidRef: ""
    });
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
            console.log(deliveryMethodsSelection)
        }
    }, [selectedDelivery])

    const handleDeliverySelection = (deliveryMethod) => {
        setSelectedDelivery(
            deliveryMethodsSelection[deliveryMethod]
            ? unselectedDelivery
            : deliveryMethod
        )
    } 

    return (
        <>
            <div><FormParagraphSign numberTag={1} text={locale.contact_info} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField label={locale.name} placeholder={locale.name_placeholder} />
                        <FormField label={locale.middle_name} placeholder={locale.middle_name_placeholder} />
                        <FormField label={locale.surname} placeholder={locale.surname_placeholder} />
                        <FormField label={locale.email} placeholder={locale.email_placeholder} />
                        <FormField label={locale.phone_number} placeholder={locale.phone_number_placeholder} />
                    </div>
                </div>
            </div>
            <div><FormParagraphSign numberTag={2} text={locale.delivery} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <CityAutocomplete setCitySelection={setCitySelection} />
                        <ShowHideBox title={locale.nova_poshta} showContent={deliveryMethodsSelection[novaPoshtaDelivery]} onClick={() => handleDeliverySelection(novaPoshtaDelivery)}>
                            <WarehouseAutocomplete cityName={citySelection.name} cityGuidRef={citySelection.cityGuidRef} />
                        </ShowHideBox>
                        <ShowHideBox title={locale.nova_poshta_courier_delivery} showContent={deliveryMethodsSelection[novaPoshtaCourierDelivery]} onClick={() => handleDeliverySelection(novaPoshtaCourierDelivery)}>
                            <WarehouseAutocomplete cityName={citySelection.name} cityGuidRef={citySelection.cityGuidRef} />
                        </ShowHideBox>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;