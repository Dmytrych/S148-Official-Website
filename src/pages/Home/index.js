import React from 'react'
import scratch from './Vector.svg';
import bottles from './bottles.png'
import { locale } from '../../locale/ua';
import RoundedButton from '../../components/RoundedButton';
import './index.css';
import { styled } from '@mui/system';
import WholeWindowBlock from '../../components/WholeWindowBlock';

const instagramUrl = 'https://www.instagram.com/s148_engineering/'

export default function Home() {
    const instagramRedirect = () => {
        window.open(instagramUrl, '_blank')
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <MainFrame>
            <div className='title-page'>
                <div className='scratch-image-container'>
                    <img className='scratch-mark' src={scratch} />
                    <img className='big-bottle' src={bottles} />
                </div>
                <div className='main-page-text'>
                    <GiantTitleText>
                        {locale.universal_oil}
                    </GiantTitleText>
                    <div className='main-page-title-description'>
                        {locale.universal_oil_detailed}
                    </div>
                    <div className='buy-button'>
                        <RoundedButton text={locale.buy} onClick={instagramRedirect} />
                    </div>
                    <div className='slogan'>
                        {locale.slogan}
                    </div>
                </div>
            </div>
            <ProductCarousel />
            <WholeWindowBlock>
                <PagePart />
            </WholeWindowBlock>
        </MainFrame>
    )
}

const GiantTitleText = styled('div')({
    textShadow: "0px 4px 10px var(--title-text-shadow-color)",
    width: "min-content",
    fontSize: "5rem"
})

const MainFrame = styled('div')({
    fontFamily: "var(--main-page-font-family)",
    minHeight: "90vh",
    width: "100%"
})

const ProductCarousel = styled('div')({
    height: "600px",
    backgroundColor: 'white'
})

const PagePart = styled('div')({
    height: "100%",
    background: "linear-gradient(196.54deg, rgba(36, 255, 0, 0.29) 8.81%, rgba(16, 15, 15, 0.46) 60.6%)"
})