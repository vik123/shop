import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addCartItems } from '../../redux/actions/cartAction';
import './productList.styles.scss';

const ProductList = ({ item, addCartItems}) =>{
    const { id, name, imageUrl, price } = item;
    return (
    <div className="collection-item">
        <div className="image" style={{ 
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={()=>addCartItems(item)} inverted>
            Add to cart
        </CustomButton>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addCartItems: (item) => dispatch(addCartItems(item))
});

export default connect(null, mapDispatchToProps)(ProductList);