import { NoSsr } from '@mui/material';
import React, { useContext, useState } from 'react';
import { noop } from '../../utils';
import './index.css';

const sizeToCssMapping = {
  big: 'rounded-button-big',
  medium: 'rounded-button-medium',
  small: 'rounded-button-small'
}

const typeToCssMapping = {
  normal: '',
  success: 'rounded-button-success',
  error: 'rounded-button-error'
}

function RoundedButton({ text, size = 'big', type = 'normal', disabled = false, onClick = noop }) {
  const sizeCss = sizeToCssMapping[size] ?? sizeToCssMapping['medium']
  const typeCss = typeToCssMapping[type] ?? typeToCssMapping['normal']

  const handleClick = (event) => {
    if(!disabled){
      onClick(event)
    }
  }

  return (
    <div className={`${disabled ? 'rounded-button-disabled' : 'rounded-button'} ${sizeCss} ${typeCss}`} onClick={handleClick}>
      {text}
    </div>
  );
}

export default RoundedButton;