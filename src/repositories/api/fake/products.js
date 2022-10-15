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