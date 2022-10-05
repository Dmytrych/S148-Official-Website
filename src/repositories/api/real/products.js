import { fetchFrom, GET } from "./apiRequestUtils";

const useMocks = process.env.USE_MOCKS;

const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export function getAllProducts(){
    return fetchFrom(`/${controllerName}/${actionName}`, GET);
}