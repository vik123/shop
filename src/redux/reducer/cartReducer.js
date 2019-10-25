import { addCartItems } from '../utils';
import { CART_TOGGLE_HIDDEN, ADD_CART_ITEMS, CLEAR_CART_ITEM } from '../types';

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
        case CLEAR_CART_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter( cartItem => 
                        cartItem.id !== action.payload.id
                    )
            }
        default:
            return state;
    }
}

export default Cart;