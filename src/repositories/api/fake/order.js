export function create(deliveryTypeName, orderData){
    console.log('Order created')
    console.log({deliveryTypeName, orderData})

    return Promise.resolve({
        isValid: true,
        processResults: [
            {
                code: "guid",
                resultData: null
            }
        ],
        result: {
            totalPrice: 1000,
            orderId: 228
        }
    })
}