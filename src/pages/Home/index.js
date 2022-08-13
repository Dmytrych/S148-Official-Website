import React from 'react'
import OrderForm from '../../components/OrderForm';
import scratch from './Vector.svg';
import bottle from './pngwing 1.png'
import { locale } from '../../locale/ua';
import RoundedButton from '../../components/RoundedButton';
import RoundButton from '../../components/RoundButton';
import PlusMinusControl from '../../components/PlusMinusControl'
import './index.css'

export default function Home() {
    return (
        <div className='main-frame'>
            <div className='title-page'>
                <img className='scratch-mark' src={scratch}/>
                <div className='bottles'>
                    <img className='big-bottle' src={bottle}/>
                    <img className='small-bottle' src={bottle}/>
                </div>
                <div className='main-page-text'>
                    <div className='main-page-title-text'>
                        {locale.universal_oil}
                    </div>
                    <div className='main-page-title-subtext main-page-title-description'>
                        {locale.universal_oil_detailed}
                    </div>
                    <div className='main-page-title-subtext buy-button'>
                        <RoundedButton text={locale.buy}/>
                    </div>
                    <div className='main-page-title-subtext slogan'>
                        {locale.slogan}
                    </div>
                </div>
            </div>
            <div className='main-page-block'>
                <div className='product-display-container'>
                    <div className="product-display">
                        <div className='product-box'>
                            <div className='product-image-container'>
                                <img className='product-image' src={bottle}/>
                            </div>
                            <div className='product-button-container'>
                                <PlusMinusControl/>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='product-image-container'>
                                <img className='product-image' src={bottle}/>
                            </div>
                            <div className='product-button-container'>
                                <PlusMinusControl/>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='product-image-container'>
                                <img className='product-image' src={bottle}/>
                            </div>
                            <div className='product-button-container'>
                                <PlusMinusControl/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inblock-container'>
                    <div className='middle-page-container'>
                        <OrderForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}