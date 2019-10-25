import React from 'react';

import ProductList from '../product-list/productList.component';

import './collectionOverview.styles.scss';


const CollectionOverview = ({ title, items }) => {
    
    return(
        <div className='collections-overview'>
        {
            items.map(item => (
                <ProductList key={item.id} item={item} />
            ))
        }
        </div>
    )
}

export default CollectionOverview;