import React, { useContext, useState } from 'react';
import './index.css';

function RoundedButton({ text }) { 
      return (
        <div className='rounded-button'>
            {text}
        </div>
      );
}

export default RoundedButton;