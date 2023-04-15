import { styled } from '@mui/material';
import React from 'react'
import WholeWindowBlock from '../../components/WholeWindowBlock';
import TallProductCard from '../../components/TallProductCard'
import { useProducts } from '../../hooks/useProducts';

export default function Products() {
    const products = useProducts()

    return (<WholeWindowBlock>
        <Gradient>
            <ProductPageBlock>
                <ProductDisplay>
                    {products && products.map((product) => <TallProductCard key={product.id} product={product} />)}
                </ProductDisplay>
            </ProductPageBlock>
        </Gradient>
    </WholeWindowBlock>)
}

const Gradient = styled('div')({
    height: "100%",
    background: "var(--main-page-gradient)"
})

const ProductPageBlock = styled('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const ProductDisplay = styled('div')({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70vw",
    marginTop: "20px"
})