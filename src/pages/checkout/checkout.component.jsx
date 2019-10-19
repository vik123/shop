import React from 'react';
import { connect } from 'react-redux';
import CheckoutItems from '../../components/checkout-items/checkout-item.component';
import './checkout.styles.scss';


const CheckoutPage = ({ cartItem }) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
        cartItem.map(item => 
            (
                <CheckoutItems key={item.id} item={item} />
            ))
    }
    <div className='total'>TOTAL: $0</div>
    </div>
);


const mapStateToProps = (state) => ({
    cartItem: state.cart.cartItems
})

export default connect(mapStateToProps)(CheckoutPage);