import React, { useState } from 'react';
import logo from '../../imgShared/S148.png'
import { locale } from '../../locale/ua';
import './index.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';

function TopBar() {
    const [cartLinkDisabled, setCartLinkDisabled] = useState(true);
    const [ cart ] = useCart();

    useEffect(() => {
        setCartLinkDisabled(Object.keys(cart).length <= 0)
    }, [cart])

    return (
        <div className='top-bar'>
            <div className='logo-left-container'>
                <div className='logo-left'>
                    <img className='logo-image-left' src={logo} />
                </div>
            </div>
            <div className='item-menu'>
                <div className="top-bar-item">
                    <NavLink className="top-bar-nav-link" to="/">{locale.home_page}</NavLink>
                </div>
                <div className="top-bar-item">
                    <NavLink className="top-bar-nav-link" to="/products">{locale.products_page}</NavLink>
                </div>
                <div className="top-bar-item">
                    {
                        cartLinkDisabled
                        ? <span className='top-bar-nav-link-disabled'>{locale.cart_page}</span>
                        : <NavLink className='top-bar-nav-link' to="/cart">{locale.cart_page}</NavLink>
                    }
                </div>
            </div>
        </div>
    );
}

export default TopBar;