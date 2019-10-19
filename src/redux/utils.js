export const addCartItems = (cartItems, addCartItems) => {

    const existingCartItem = cartItems.find(
       cartItem => cartItem.id === addCartItems.id
    );

    if(existingCartItem){
      return  cartItems.map( cartItem => 
            cartItem.id === addCartItems.id
            ?
            {...cartItem, quantity: cartItem.quantity+1}
            :
            cartItem
        )
    }

    return [...cartItems, {...addCartItems, quantity:1 }]
}