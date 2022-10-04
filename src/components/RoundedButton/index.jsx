import React, { useContext, useState } from 'react';
import { noop } from '../../utils';
import './index.css';

function RoundedButton({ text, size = 'big', type = 'normal', onClick = noop }) {
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
        <div className={`rounded-button ${sizeCss} ${typeCss}`} onClick={onClick}>
            {text}
        </div>
      );
}

export default RoundedButton;