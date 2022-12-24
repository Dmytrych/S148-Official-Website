import {GET, fetchFrom} from './apiRequestUtils'

const controllerName = "DeliveryInfoApi"
const getCitiesActionName = "GetCities"
const getWarehouseByNumberActionName = "GetWarehouseByNumber"

export function getCities(filter){
    return fetchFrom(`/${controllerName}/${getCitiesActionName}?nameFilter=${filter}`, GET);
}

export async function getWarehouseByNumber(cityName, cityGuidRef, warehouseNumber) {
    return fetchFrom(`/${controllerName}/${getWarehouseByNumberActionName}?cityGuidRef=${cityGuidRef}&cityName=${cityName}&warehouseNumber=${warehouseNumber}`, GET);
}