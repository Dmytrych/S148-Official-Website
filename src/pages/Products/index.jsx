import { useEffect, useState } from 'react'
import TallProductCard from '../../components/TallProductCard'
import { getAllProducts } from '../../repositories/products';
import './index.css'

export default function Products(){
    const [products, setProducts] = useState()

    useEffect(() => {
        async function fetchData() {
            const fetchedProducts = await getAllProducts()
            setProducts(fetchedProducts)
        }
        fetchData();
      }, []);

    return (<div className='products-page'>
        <div className='products-page-block'>
            <div className='products-display'>
                {products && products.map((product) => <TallProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    </div>)
}