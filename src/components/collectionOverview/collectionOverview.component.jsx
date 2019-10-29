import React from 'react';

import ProductList from '../product-list/productList.component';

import './collectionOverview.styles.scss';


const CollectionOverview = ({ title, items }) => {
    
    return(
        <div>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(item => (
                <ProductList key={item.id} item={item} />
            ))
        }
        </div></div>
    )
}

export default CollectionOverview;