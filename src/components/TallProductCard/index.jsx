import { styled } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageBox from '../ImageBox';
import PriceTag from '../PriceTag';

function TallProductCard({ product }) {
    return (
    <Container>
        <ImageContainer>
            <ImageBox imageName={product.imageName}/>
        </ImageContainer>
        <div style={{ width: "100%" }}>
            <ProductText>
                <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
            </ProductText>
            <ProductPriceBox>
                <PriceTag value={product.unitPrice}></PriceTag>
                {/*<div style={{ marginRight: "10px" }}>*/}
                {/*    <RoundedButton text={locale.buy} onClick={() => setProductQuantity(productQuantity + 1)}/>*/}
                {/*</div>*/}
            </ProductPriceBox>
        </div>
    </Container>)
}

export default TallProductCard;

const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    width: "20rem",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "var(--product-card-color)"
})

const ImageContainer = styled("div")({
    height: "50%",
    width: "100%",
    backgroundColor: "white"
})

const ProductText = styled("span")({
    display: "block",
    overflow: "hidden",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    margin: "10px 10px 0px 20px"
})

const ProductPriceBox = styled("div")({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
})