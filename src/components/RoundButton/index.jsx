import React, { useContext, useState } from 'react';
import './index.css';
import { noop } from '../../utils'

function RoundButton({ text, onClick = noop }) { 
      return (
        <div className='round-button' onClick={onClick}>
            <div className='round-button-text-container'>
                {text}
            </div>
        </div>
      );
}

export default RoundButton;