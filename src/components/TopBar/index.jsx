import React, { useContext, useState } from 'react';
import logo from '../../imgShared/S148.png'
import { Button, ButtonGroup } from '@mui/material';
import { locale } from '../../locale/ua';
import './index.css';
import { noop } from '../../utils';
import NavButton from '../NavButton';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/">{locale.home_page}</NavLink>
                </div>
                <div className="top-bar-item">
                    <NavLink to="/products">{locale.products_page}</NavLink>
                </div>
                <div className="top-bar-item">
                    <NavLink to="/cart">{locale.cart_page}</NavLink>
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