import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-items.component';
import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.map( items => 
            <CartItem key={items.id} item={items} />
        ) }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
}) 

export default connect(mapStateToProps)(CartDropdown);