import React from 'react';
import { connect } from 'react-redux';
import { clearCartItem } from '../../redux/actions/cartAction';

import './checkout.styles.scss';

const CheckoutItem = ({ item,  clearItem}) => {
    
    const {name, imageUrl, price, quantity } = item;

    return (
    <div className='checkout-item'>
        <div className='image-container'>
        <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick = { () => clearItem(item)}>&#10005;</div>
    </div>
)
}


const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);