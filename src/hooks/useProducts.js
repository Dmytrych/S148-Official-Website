import { useEffect, useRef, useState } from "react"
import { getAllProducts } from "../repositories/api";

export const useProducts = () => {
    const dataFetched = useRef(false)
    const [products, setProducts] = useState()

    useEffect(() => {
        if (!dataFetched.current) {
            async function fetchData() {
                const fetchedProducts = await getAllProducts()
                setProducts(fetchedProducts)
            }
            fetchData();
            return () => { dataFetched.current = true }
        }
    }, []);

    return products;
}