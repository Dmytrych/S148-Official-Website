import React, { useContext, useState } from 'react';
import './index.css';

function RoundedButton({ text, size = 'big', type = 'normal' }) {
      const sizeCss = size == 'big' ? 'rounded-button-big' : 'rounded-button-small'
      let typeCss;
      switch (type) {
        case 'success':
          typeCss = 'rounded-button-success'
          break;
        case 'error':
          typeCss = 'rounded-button-error';
          break;
      }

      return (
        <div className={`rounded-button ${sizeCss} ${typeCss}`}>
            {text}
        </div>
      );
}

export default RoundedButton;