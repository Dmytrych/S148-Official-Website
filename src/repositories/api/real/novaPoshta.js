import {GET, fetchFrom} from './apiRequestUtils'

const controllerName = "DeliveryInfoApi"
const actionName = "GetCities"

export function getCities(filter){
    return fetchFrom(`/${controllerName}/${actionName}?nameFilter=${filter}`, GET);
}

