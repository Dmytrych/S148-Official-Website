import React, { useContext, useState } from 'react';
import logo from './S148.png'
import { Button, ButtonGroup } from '@mui/material';
import { locale } from '../../locale/ua';
import './index.css';
import { noop } from '../../utils';

function NavButton({onClick = noop}) {
    return (
        <div onClick={onClick} className='nav-button-box'>
            <span className='nav-button-text'>Waaaasagh</span>
        </div>
    )
}

function TopBar() { 

      return (
        <div className='top-bar'>
            <div className='logo-left-container'>
                <div className='logo-left'>
                    <img className='logo-image-left' src={logo}/>
                </div>
            </div>
            <div className='item-menu'>
                <div className="top-bar-item">
                    <NavButton/>
                </div>
                <div className="top-bar-item">
                    <NavButton/>
                </div>
                <div className="top-bar-item">
                    <NavButton/>
                </div>
                <div className="top-bar-item">
                    <NavButton/>
                </div>
                <div className="top-bar-item">
                    <NavButton/>
                </div>
            </div>
        </div>
      );
}

export default TopBar;