import React, { useContext, useState } from 'react';
import './index.css';

function RoundButton({ text }) { 
      return (
        <div className='round-button'>
            {text}
        </div>
      );
}

export default RoundButton;