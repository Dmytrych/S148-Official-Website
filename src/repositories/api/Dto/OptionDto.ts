export type OptionDto<TVariant> = {
    name: string,
    mandatory: boolean,
    type: OptionType,
    variants: TVariant[]
}

export type TextOptionDto = OptionDto<TextOptionVariant>

export type ImageOptionDto = OptionDto<ImageOptionVariant>

type OptionVariant = {
    name: string,
    isDefault: boolean,
    price: number
}

export type ProductOptionVariant = TextOptionVariant | ImageOptionVariant

export type TextOptionVariant = OptionVariant & {
}

export type ImageOptionVariant = OptionVariant & {
    image: string
}

export enum OptionType {
    Image = "image",
    Text = "text"
}