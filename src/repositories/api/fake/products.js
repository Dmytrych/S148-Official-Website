const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export function getAllProducts(){
    return Promise.resolve([
        {
            id: 1,
            name: 'Збройне мастило 200мл',
            unitPrice: 200
        },
        {
            id: 2,
            name: 'Збройне мастило 50мл',
            unitPrice: 100
        },
        {
            id: 3,
            name: 'Розміднювач 200мл',
            unitPrice: 500
        }
    ])
}

export async function getAllProductsFiltered(productIds){
    return await Promise.resolve(products.filter(product => productIds.map(productId => parseInt(productId)).includes(product.id)))
}

const products = [
    {
        id: 1,
        name: 'Збройне мастило 200мл',
        unitPrice: 200
    },
    {
        id: 2,
        name: 'Збройне мастило 50мл',
        unitPrice: 100
    },
    {
        id: 3,
        name: 'Розміднювач 200мл',
        unitPrice: 500
    }
]