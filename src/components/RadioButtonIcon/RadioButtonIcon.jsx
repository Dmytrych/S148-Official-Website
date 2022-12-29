import React, { useContext, useState } from 'react';
import radioButtonChecked from './RadioButtonChecked.png';
import radioButtonUnchecked from './RadioButtonUnchecked.png';
import './index.css'
import { noop } from '../../utils';

function RadioButtonIcon({checked = false, onClick = noop}) { 
      return (
        <div className='radio-button-icon' onClick={onClick}>
            <img src={checked ? radioButtonChecked : radioButtonUnchecked}></img>
        </div>
      );
}

export default RadioButtonIcon;