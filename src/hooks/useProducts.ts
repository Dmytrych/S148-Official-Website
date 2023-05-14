import { useEffect, useRef, useState } from "react"
import { getAllProductsFiltered } from '../repositories/api'
import { ProductDto } from '../repositories/api/Dto/ProductDto'

export const useProducts = (productIds?: number[]) => {
    const dataFetched = useRef(false)
    const [products, setProducts] = useState([] as ProductDto[])

    useEffect(() => {
        if (!dataFetched.current) {
            const fetchData = async () => await getAllProductsFiltered(productIds ?? [])
            fetchData().then(fetchedProducts => setProducts(fetchedProducts));
            return () => { dataFetched.current = true }
        }
    }, [productIds]);

    return products;
}