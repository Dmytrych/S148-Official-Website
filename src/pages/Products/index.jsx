import TallProductCard from '../../components/TallProductCard'
import './index.css'

export default function Products(){
    return (<div className='products-page'>
        <div className='products-page-block'>
            <div className='products-display'>
                <div className='product-container'>
                    <TallProductCard/>
                </div>
                <div className='product-container'>
                    <TallProductCard/>
                </div>
                <div className='product-container'>
                    <TallProductCard/>
                </div>
            </div>
        </div>
    </div>)
}