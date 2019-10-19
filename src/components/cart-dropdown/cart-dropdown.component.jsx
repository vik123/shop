import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-items.component';
import { toogleCartHidden } from '../../redux/actions/cartAction';
import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { 
            cartItems.length ?
                cartItems.map( items => 
                    <CartItem key={items.id} item={items} />
                ) 
            :
            (<span className='empty-message'>No items in cart.</span>)       

        }
        </div>
        <CustomButton onClick={ () => 
            {
                history.push('/checkout');
                dispatch(toogleCartHidden());
            }
    
        }>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
}) 

export default withRouter(connect(mapStateToProps)(CartDropdown));