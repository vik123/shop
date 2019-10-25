import React from 'react';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collectionOverview/collectionOverview.component';

import './catProductlist.styles.sccs';


const CatProductList = ({ products, match }) => {
    console.log(match);
    return(
        <div className='collection-page'>
        <h2 className='title'>sss</h2>
        <div className='items'>
            { products.map((products) => (
                <CollectionOverview key={products.id} items={products.items} />
            ))}
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.shop.shopData
});

export default connect(mapStateToProps)(CatProductList);