import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { locale } from '../../locale/ua';

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
            <FormControl variant="filled">
                <TextField label={locale.email} helperText={locale.name} variant='filled'>{locale.email}</TextField>
            </FormControl>
        </div>
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor="email">Email Address</label>
            

        //     <FormControl>
        //         <InputLabel htmlFor="my-input">Email address</InputLabel>
        //         <Input id="my-input" aria-describedby="my-helper-text" />
        //         <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        //     </FormControl>

        //     <input
        //         id="email"
        //         name="email"
        //         type="email"
        //         onChange={formik.handleChange}
        //         value={formik.values.email}
        //     />
    
        //   <button type="submit">Submit</button>
        // </form>
      );
}

export default OrderForm;