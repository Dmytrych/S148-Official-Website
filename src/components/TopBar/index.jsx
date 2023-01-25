import React, { useContext, useState } from 'react';
import logo from '../../imgShared/S148.png'
import { locale } from '../../locale/ua';
import './index.css';
import { NavLink } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { useEffect } from 'react';

function TopBar() {
    const [cartLinkDisabled, setcartLinkDisabled] = useState(true)
    const cartContext = useContext(CartContext)

    useEffect(() => {
        setcartLinkDisabled(Object.keys(cartContext.cart).length <= 0)
    }, [cartContext])

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