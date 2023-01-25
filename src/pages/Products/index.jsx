import React, { useEffect, useRef, useState } from 'react'
import TallProductCard from '../../components/TallProductCard'
import { getAllProducts } from '../../repositories/api/index';
import './index.css'

export default function Products(){
    const dataFetched = useRef(false)
    const [products, setProducts] = useState()

    useEffect(() => {
        if(!dataFetched.current){
            async function fetchData() {
                const fetchedProducts = await getAllProducts()
                setProducts(fetchedProducts)
            }
    
            fetchData();

            return () => {dataFetched.current = true}
        }
      }, []);

    return (<div className='products-page'>
        <div className='products-page-block'>
            <div className='products-display'>
                {products && products.map((product) => <TallProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    </div>)
}