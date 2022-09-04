import PlusMinusControl from '../PlusMinusControl';
import './index.css'

function TallProductCard({className}) {
    return (<div className={`tall-product-card ${className}`}>
        <PlusMinusControl />
    </div>)
}

export default TallProductCard;