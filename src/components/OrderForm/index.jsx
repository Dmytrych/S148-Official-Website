import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { locale } from '../../locale/ua';
import FormField from '../FormField';
import RoundedButton from '../RoundedButton';
import './index.css';

function OrderForm() { 
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

      return (
        <div>
            <FormField placeholder={locale.name_placeholder} header={locale.name}/>
            <FormField placeholder={locale.middle_name_placeholder} header={locale.middle_name}/>
            <FormField placeholder={locale.surname_placeholder} header={locale.surname}/>
            <div className='order-form-button-container'>
                <RoundedButton text={locale.order} size='small'/>
            </div>
        </div>
        
      );
}

export default OrderForm;