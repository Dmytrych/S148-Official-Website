const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export function getAllProducts(){
    return Promise.resolve([
        {
            id: 1,
            name: 'string',
            unitPrice: 200
        }
    ])
}