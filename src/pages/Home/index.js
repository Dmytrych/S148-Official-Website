import React from 'react'
import OrderForm from '../../components/OrderForm';
import scratch from './Vector.svg';
import bottle from './pngwing 1.png'
import { locale } from '../../locale/ua';
import RoundButton from '../../components/RoundButton';
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
                        <RoundButton text={locale.buy}/>
                    </div>
                    <div className='main-page-title-subtext slogan'>
                        {locale.slogan}
                    </div>
                </div>
            </div>
            <div className='main-page-block'>
                <OrderForm/>
            </div>
        </div>
    )
}