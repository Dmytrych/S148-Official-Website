const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export function getAllProducts() {
    return Promise.resolve(products)
}

export async function getAllProductsFiltered(productIds) {
    return await Promise.resolve(products.filter(product => productIds.includes(product.id)))
}

export async function getProductById(productId) {
    return await Promise.resolve(products.find(product => product.id === productId));
}

const products = [
    {
        "id": "1",
        "name": "S148 - 200мл",
        "subtitle": "Something",
        "imageName": "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png",
        "unitPrice": 250.5,
        "options": [
            {
                name: "Об'єм",
                mandatory: true,
                type: "text",
                variants: [
                    {
                        isDefault: true,
                        name: "200мл",
                        price: 200
                    },
                    {
                        name: "500мл",
                        price: 500
                    }
                ]
            },
            {
                name: "Кришка",
                mandatory: false,
                type: "image",
                variants: [
                    {
                        name: "З носиком",
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    },
                    {
                        isDefault: true,
                        name: "Кришка",
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    },
                    {
                        name: "Дозатор",
                        price: 0,
                        image: "85ecfb42-f0ba-4b4a-81a7-bd4ccc5fcbef.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "name": "S148 - 100мл",
        "subtitle": "Засіб призначений для комбінованої хімічної очистки ствола.",
        "imageName": "d556282d-e19c-40fe-9f10-0ac016c53a8a.png",
        "unitPrice": 110,
        "options": [
            {
                name: "Volume",
                type: "mandatory",
                variants: [
                    {
                        name: "200мл",
                        price: 200
                    },
                    {
                        name: "500мл",
                        price: 500
                    }
                ]
            },
            {
                name: "Cap",
                type: "optional",
                variants: [
                    {
                        name: "З носиком",
                        price: 200
                    }
                ]
            }
        ]
    }
]