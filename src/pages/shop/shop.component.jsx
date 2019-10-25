import React from 'react';
import { connect } from 'react-redux';
import ShopList from '../../components/shop/ShopList.component';


const Shop = ({ products }) => (
    <div className="shop-page">
    { 
        products
        .map(({id, ...otherShopProps}) => (
            <ShopList key={id} {...otherShopProps} />
        ))
    
    }
    </div>
)

const mapStateToProps = state => ({
    products: state.shop.shopData
});

export default connect(mapStateToProps)(Shop);