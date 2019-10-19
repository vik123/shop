import { CART_TOGGLE_HIDDEN, ADD_CART_ITEMS } from '../types'; 

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