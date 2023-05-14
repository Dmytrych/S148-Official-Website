import { ProductDto } from '../repositories/api/Dto/ProductDto'
import { OptionSelection } from '../contexts/CartContext'

export function getPriceWithOptions(product: ProductDto, selectedOptions: OptionSelection[]): number {
    const propertyPrice = selectedOptions.reduce((acc, selection) => {
            return acc + selection.selectedVariant.price
        }, 0)

    return propertyPrice + product.unitPrice;
}