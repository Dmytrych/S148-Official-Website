import { fetchFrom, GET } from "./apiRequestUtils";

const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export function getAllProducts(){
    return fetchFrom(`/${controllerName}/${actionName}`, GET);
}