import {
    ImageOptionDto,
    ImageOptionVariant,
    OptionType,
    TextOptionDto,
    TextOptionVariant,
} from '../Dto/OptionDto'
import { ProductDto, ProductOptionDto } from '../Dto/ProductDto'

export function getAllProducts(): Promise<ProductDto[]> {
    return Promise.resolve(products)
}

export async function getAllProductsFiltered(productIds: number[]): Promise<ProductDto[]> {
    return Promise.resolve(
        productIds && productIds.length > 0
            ? products.filter(product => productIds.includes(product.id))
            : products)
}

export async function getProductById(productId: number): Promise<ProductDto> {
    return Promise.resolve(products.find(product => product.id === productId));
}

const products = [
    {
        "id": 1,
        "name": "S148 - 200мл",
        "subtitle": "Something",
        "imageName": "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png",
        "unitPrice": 250.5,
        "options": [
            {
                name: "Об'єм",
                mandatory: true,
                type: OptionType.Text,
                variants: [
                    {
                        isDefault: true,
                        name: "200мл",
                        price: 200
                    } as TextOptionVariant,
                    {
                        isDefault: false,
                        name: "500мл",
                        price: 500
                    } as TextOptionVariant
                ] as TextOptionVariant[]
            } as TextOptionDto,
            {
                name: "Кришка",
                mandatory: false,
                type: "image",
                variants: [
                    {
                        name: "З носиком",
                        isDefault: false,
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    } as ImageOptionVariant,
                    {
                        isDefault: true,
                        name: "Кришка",
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    } as ImageOptionVariant,
                    {
                        name: "Дозатор",
                        isDefault: false,
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    } as ImageOptionVariant
                ] as ImageOptionVariant[]
            } as ImageOptionDto
        ] as ProductOptionDto[]
    },
    {
        "id": 2,
        "name": "S148 - 100мл",
        "subtitle": "Засіб призначений для комбінованої хімічної очистки ствола.",
        "imageName": "d556282d-e19c-40fe-9f10-0ac016c53a8a.png",
        "unitPrice": 110,
        "options": [
            {
                name: "Volume",
                mandatory: true,
                type: OptionType.Text,
                variants: [
                    {
                        isDefault: false,
                        name: "200мл",
                        price: 200
                    } as TextOptionVariant,
                    {
                        isDefault: false,
                        name: "500мл",
                        price: 500
                    } as TextOptionVariant
                ] as TextOptionVariant[]
            } as TextOptionDto,
            {
                name: "Cap",
                mandatory: false,
                type: OptionType.Text,
                variants: [
                    {
                        isDefault: false,
                        name: "З носиком",
                        price: 200
                    } as TextOptionVariant
                ] as TextOptionVariant[]
            } as TextOptionDto
        ] as ProductOptionDto[]
    } as ProductDto
] as ProductDto[]