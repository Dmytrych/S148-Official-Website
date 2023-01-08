import React from 'react'
import OrderForm from '../../components/OrderForm';
import scratch from './Vector.svg';
import bottles from './bottles.png'
import { locale } from '../../locale/ua';
import RoundedButton from '../../components/RoundedButton';
import PlusMinusControl from '../../components/PlusMinusControl'
import './index.css'
import LubeDisplay from './components/LubeDisplay';

const instagramUrl = 'https://www.instagram.com/s148_engineering/'

export default function Home() {
    const instagramRedirect = () => {
        window.open(instagramUrl, '_blank')
    }

    return (
        <div className='main-frame'>
            <div className='title-page'>
                <div className='scratch-image-container'>
                    <img className='scratch-mark' src={scratch}/>
                    <img className='big-bottle' src={bottles}/>
                </div>
                <div className='main-page-text'>
                    <div className='main-page-title-text main-title-text'>
                        {locale.universal_oil}
                    </div>
                    <div className='main-page-title-description'>
                        {locale.universal_oil_detailed}
                    </div>
                    <div className='buy-button'>
                        <RoundedButton text={locale.buy} onClick={instagramRedirect}/>
                    </div>
                    <div className='slogan'>
                        {locale.slogan}
                    </div>
                </div>
            </div>
            <div className='page-content-wrapper'>
                <div className='page-content-block'>
                    <LubeDisplay />
                </div>
            </div>
        </div>
    )
}