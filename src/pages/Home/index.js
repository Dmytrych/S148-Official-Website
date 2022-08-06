import React from 'react'
import OrderForm from '../../components/OrderForm';
import scratch from './Vector.svg';
import bottle from './pngwing 1.png'
import { locale } from '../../locale/ua';
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
                <div>
                    {locale.universal_oil}
                </div>
            </div>
        </div>
    )
}