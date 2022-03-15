
import { ADD_TO_CART, PRODUCT, MSG_ADD_TO_CART_SUCCSESS, DELETE_CART, MSG_UPDATE_CART_SUCCSESS, SETQTY } from '../actionTypes'

export const product = (products) => {
    return {
        type: PRODUCT
        , products
    }
}
export const addToCart = (product, qty) => {
    return {
        type: ADD_TO_CART,
        product, qty
    }
}
export const addToCartMessger = (messager) => {
    return {
        type: MSG_ADD_TO_CART_SUCCSESS,
        messager
    }
}

export const mesUpdate = (messager) => {
    return {
        type: MSG_UPDATE_CART_SUCCSESS,
        messager
    }
}

export const deleteCart = (cart) => {
    return {
        type: DELETE_CART,
        cart
    }
}

export const setQty = (qty, id) => {
    return {
        type: SETQTY,
        qty, id
    }
}


