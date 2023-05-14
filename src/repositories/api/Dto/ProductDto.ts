import { ImageOptionDto, TextOptionDto } from './OptionDto'

export type ProductOptionDto = TextOptionDto | ImageOptionDto;

export type ProductDto = {
    id: number,
    name: string,
    subtitle: string,
    imageName: string,
    unitPrice: number,
    options: ProductOptionDto[]
}