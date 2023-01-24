import { fetchFrom, GET } from "./apiRequestUtils";

const useMocks = process.env.USE_MOCKS;

const controllerName = "ProductsRestApi"
const actionName = "GetAll"

export async function getAllProducts(){
    return fetchFrom(`/${controllerName}/${actionName}`, GET);
}

export async function getAllProductsFiltered(productIds){
    var productQuery = productIds.reduce((accumulator, productId) => accumulator + `&${getFilterQueryElement(productId)}`, getFilterQueryElement(productIds[0]))
    return await fetchFrom(`/${controllerName}/${actionName}?${productQuery}`, GET);
}

const getFilterQueryElement = (id) => `IdFilter.Filter=${id}`