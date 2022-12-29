import React, { useContext, useEffect, useState } from 'react';
import { noop } from '../../utils';
import RadioButtonIcon from '../RadioButtonIcon';
import './index.css'

function ShowHideBox({ showContent = false, title = "Default Title", onClick = noop, children }) {
  return (
    <div className={`show-hide-box ${showContent && 'show-hide-box-selected'}`}>
      <div className='show-hide-box-caption' onClick={onClick}>
        <RadioButtonIcon checked={showContent} />
        <span>{title}</span>
      </div>
      {showContent && 
        <div>
          {children}
        </div>
      }
    </div>
  );
}

export default ShowHideBox;