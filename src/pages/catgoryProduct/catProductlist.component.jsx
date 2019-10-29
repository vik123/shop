import React from 'react';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collectionOverview/collectionOverview.component';

import './catProductlist.styles.scss';


const CatProductList = ({ products, match }) => {
    return(
        <div className='collection-page'>
            { products.map((products) => (
                 products.routeName === match.params.catname ? <CollectionOverview key={products.id} items={products.items} /> : '' 
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.shop.shopData
});

export default connect(mapStateToProps)(CatProductList);