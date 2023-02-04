import {POST, fetchFrom} from './apiRequestUtils'

const controllerName = "OrderPlacementApi"
const createActionName = "Create"

export function create(deliveryTypeName, orderData){
    return fetchFrom(`/${controllerName}/${deliveryTypeName}/${createActionName}`, POST, orderData);
}