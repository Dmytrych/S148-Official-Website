const cartKey = "cart"

export const getLocalCart = () => {
    return JSON.parse(localStorage.getItem(cartKey))
}

export const setLocalCart = (cart) => {
    localStorage.setItem(cartKey, JSON.stringify(cart))
}