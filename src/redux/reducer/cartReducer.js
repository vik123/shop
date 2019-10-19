import { addCartItems } from '../utils';
import { CART_TOGGLE_HIDDEN, ADD_CART_ITEMS } from '../types';

const Initial_State = {
    hidden : true,
    cartItems: []
}


const Cart = (state = Initial_State, action) => {
    switch(action.type){
        case CART_TOGGLE_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case ADD_CART_ITEMS:
            return{
                ...state,
                cartItems: addCartItems(state.cartItems , action.payload)
            }
        default:
            return state;
    }
}

export default Cart;