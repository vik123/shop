import { CART_TOGGLE_HIDDEN, ADD_CART_ITEMS, CLEAR_CART_ITEM } from '../types'; 

export const toogleCartHidden = () => {
    return{
        type: CART_TOGGLE_HIDDEN
    }
}

export const addCartItems = (item) => {
    return{
        type: ADD_CART_ITEMS,
        payload: item
    }
}

export const clearCartItem = (item) => {
    return{
        type: CLEAR_CART_ITEM,
        payload: item
    }
}