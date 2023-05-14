import { Box, Button, CircularProgress, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { WholeWindowBlock } from "../../components/WholeWindowBlock/WholeWindowBlock";
import ImageBox from "../../components/ImageBox";
import PriceTag from "../../components/PriceTag";
import { useProductInCart } from "../../hooks/useProductInCart";
import { locale } from "../../locale/ua";
import { getProductById } from "../../repositories/api";
import { ProductVersions } from "./ProductOptions";
import PlusMinusControl from "../../components/PlusMinusControl";
import { ProductName } from "../../components/ProductName";
import { ProductDto } from '../../repositories/api/Dto/ProductDto'
import { OptionSelection } from '../../contexts/CartContext'
import { ProductOptionVariant } from '../../repositories/api/Dto/OptionDto'

const defaultQuantity = 1;

const ProductDetails = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductDto>();
    const { productId } = useParams();
    const { addToCartOrUpdateQuantity } = useProductInCart();
    const [productProperties, setProductProperties] = useState<OptionSelection[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(defaultQuantity)

    useEffect(() => {
        if(isNaN(Number(productId))){
            navigate('/')
        }
    }, [navigate, productId]);

    useEffect(() => {
        async function fetchData() {
            return await getProductById(Number(productId))
        }
        fetchData().then(fetchedProduct => setProduct(fetchedProduct));
    }, [ productId ]);

    useEffect(() => {
        const defaultProductProperties = product?.options.map((option) => { return {
            option: option,
            selectedVariant: getDefaultVariant(option.variants)
        } as OptionSelection}) ?? []
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

    function setOptionValue(optionName: string, selectedVariant: ProductOptionVariant) {
        const changedProperty = productProperties.find(property => property.option.name === optionName)
        changedProperty.selectedVariant = selectedVariant
        setProductProperties([...productProperties])
    }

    function handleAddToCart() {
        addToCartOrUpdateQuantity(Number(productId), productProperties, quantity)
    }

    function handleInstantBuy() {
        addToCartOrUpdateQuantity(Number(productId), productProperties, quantity)
        navigate('/cart')
    }

    function handleQuantityChange(newQuantity: number) {
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
                                <ProductTitleBlock>
                                    <ProductName value={product.name}/>
                                    <Box sx={{ lineHeight: "2" }}>
                                        {product.subtitle}
                                    </Box>
                                </ProductTitleBlock>
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
                                        <BuyButton variant="contained" size='large' onClick={handleInstantBuy}>{locale.buy}</BuyButton>
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

    function getDefaultVariant(variants: ProductOptionVariant[]): ProductOptionVariant {
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

const ProductTitleBlock = styled('div')({
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