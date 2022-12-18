import React from 'react'
import { locale } from '../../../../locale/ua';
import FormParagraphSign from '../FormParagraphSign';
import FormField from '../../../../components/FormField';
import CityAutocomplete from '../CityAutocomplete';
import WarehouseAutocomplete from '../WarehouseAutocomplete';
import './index.css';

function OrderForm(){
    return (
        <>
            <div><FormParagraphSign numberTag={0} text={locale.contact_info} /></div>
            <div className='order-page-content-info-block'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <FormField label={locale.name} className="form-field" placeholder={locale.name_placeholder} />
                        <FormField label={locale.middle_name} className="form-field" placeholder={locale.middle_name_placeholder} />
                        <FormField label={locale.surname} className="form-field" placeholder={locale.surname_placeholder} />
                        <FormField label={locale.email} className="form-field" placeholder={locale.email_placeholder} />
                        <FormField label={locale.phone_number} className="form-field" placeholder={locale.phone_number_placeholder} />
                    </div>
                </div>
            </div>
            <div className='order-page-content-info-block-outlined'>
                <div className='flex-column'>
                    <div className='credentials-block'>
                        <CityAutocomplete />
                        <WarehouseAutocomplete />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;