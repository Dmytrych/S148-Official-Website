import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { locale } from '../../locale/ua';
import FormField from '../FormField';

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
        <FormField placeholder='Text'/>
    
      );
}

export default OrderForm;