import { fetchFrom, GET } from "./apiRequestUtils";

const useMocks = process.env.USE_MOCKS;

const controllerName = "ProductsRestApi"
const getAllActionName = "GetAll"
const getActionName = "Get"

export async function getAllProducts(){
    return fetchFrom(`/${controllerName}/${getAllActionName}`, GET);
}

export async function getAllProductsFiltered(productIds){
    var productQuery = productIds.reduce((accumulator, productId) => accumulator + `&${getFilterQueryElement(productId)}`, getFilterQueryElement(productIds[0]))
    return await fetchFrom(`/${controllerName}/${getAllActionName}?${productQuery}`, GET);
}

export async function getProductById(productId){
    return await fetchFrom(`/${controllerName}/${getActionName}?id=${productId}`, GET);
}

const getFilterQueryElement = (id) => `IdFilter.Filter=${id}`