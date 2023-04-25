import { Box, Button, CircularProgress, Paper, styled } from "@mui/material";
import { green, grey, lightGreen } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WholeWindowBlock } from "../../components/WholeWindowBlock/WholeWindowBlock";
import ImageBox from "../../components/ImageBox";
import PriceTag from "../../components/PriceTag";
import { useProductInCart } from "../../hooks/useProductInCart";
import { locale } from "../../locale/ua";
import { getProductById } from "../../repositories/api";
import { ProductOptions, ProductVersions } from "./ProductOptions";
import PlusMinusControl from "../../components/PlusMinusControl";

const placeholder = "d556282d-e19c-40fe-9f10-0ac016c53a8a.png"

const defaultQuantity = 1;

const ProductDetails = () => {
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const [cart, addToCartOrUpdateQuantity, removeProductsFromCart] = useProductInCart();
    const [productProperties, setProductProperties] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(defaultQuantity)

    useEffect(() => {
        async function fetchData() {
            const fetchedProduct = await getProductById(productId)
            setProduct(fetchedProduct)
        }
        fetchData();
    }, []);

    useEffect(() => {
        const defaultProductProperties = product?.options.map((option) => { return {
            optionName: option.name,
            selectedVariant: getDefaultVariant(option.variants)
        }}) ?? []
        setProductProperties(defaultProductProperties)
    }, [product])

    useEffect(() => {
        if(product && productProperties){
            const propertyPrice = productProperties.length > 0 
                ? productProperties.reduce((acc, selection) => {
                    return acc + selection.selectedVariant.price
                }, 0)
                : 0
            setTotalPrice(product.unitPrice + propertyPrice)
        }
    }, [productProperties, product])

    function setOptionValue(optionName, selectedVariant) {
        const changedProperty = productProperties.find(property => property.optionName === optionName)
        changedProperty.selectedVariant = selectedVariant
        setProductProperties([...productProperties])
    }

    function handleAddToCart() {
        addToCartOrUpdateQuantity(productId, productProperties, quantity)
    }

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity)
    }

    return (
        <WholeWindowBlock>
            <Gradient>
                {product
                    ?
                    <PageContent>
                        <div style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
                            <ImageBlock>
                                <ProductImage>
                                    <ImageBox imageName={product.imageName} />
                                </ProductImage>
                            </ImageBlock>
                            <div style={{ flex: 2 }}>
                                <ProductNamePaper>
                                    <Box sx={{ fontSize: "var(--global-big-text-size)", fontWeight: "600" }}>
                                        {product.name}
                                    </Box>
                                    <Box sx={{ lineHeight: "2" }}>
                                        {product.subtitle}
                                    </Box>
                                </ProductNamePaper>
                                <DescriptionBox>
                                    <PriceTagContainer>
                                        <PriceTag value={totalPrice} />
                                    </PriceTagContainer>
                                    <Box sx={{ margin: "20px 0px 0px 0px" }}>
                                        {product?.options.map((option) => {
                                            const defaultVariant = getDefaultVariant(option.variants)
                                            return <Box key={option.name} sx={{ margin: "0px 0px 20px 0px" }}>
                                                <ProductVersions option={option} defaultValue={defaultVariant} onChange={(value) => setOptionValue(option.name, value)}/>
                                            </Box>})}
                                    </Box>
                                    <Box>
                                        <div>{locale.quantity}:</div>
                                        <PlusMinusControl onChange={handleQuantityChange} defaultValue={defaultQuantity} />
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px', marginTop: '10px'}}>
                                        <BuyButton variant="contained" size='large'>{locale.buy}</BuyButton>
                                        <BuyButton variant="contained" size='large' onClick={handleAddToCart}>{locale.add_to_cart}</BuyButton>
                                    </Box>
                                </DescriptionBox>
                            </div>
                            <div style={{ flex: 1 }}>
                                asdasdasd
                            </div>
                        </div>
                    </PageContent>
                    :
                    <CorcularProgressContainer>
                        <CircularProgress />
                    </CorcularProgressContainer>}
            </Gradient>
        </WholeWindowBlock>)

    function getDefaultVariant(variants) {
        return variants.find(variant => variant.isDefault) ?? variants[0]
    }
}

export default ProductDetails;

const ImageBlock = styled('div')({
    flex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "end"
})

const ProductImage = styled('div')({
    width: "400px",
    height: "400px"
})

const CorcularProgressContainer = styled('div')({
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const PriceTagContainer = styled('div')({
    backgroundColor: "var(--global-color-secondary)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    maxWidth: "200px",
    borderRadius: "10px",
    height: "70px"
})

const BuyButton = styled(Button)({
    ":hover": {
        backgroundColor: "green"
    },
    backgroundColor: "rgb(35, 189, 40)",
})

const DescriptionBox = styled("div")({
    margin: "10px 20px"
})

const ProductNamePaper = styled('div')({
    margin: "30px 0px 30px 30px"
})

const Gradient = styled('div')({
    height: "100%",
    background: "var(--main-page-gradient)"
})

const PageContent = styled("div")({
    display: "flex",
    margin: "0px 10vw 20px 10vw",
    backgroundColor: "white",
    borderRadius: "10px",
    flexDirection: "column"
})