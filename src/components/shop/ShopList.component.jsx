import React from 'react';
import './ShopList.styles.scss';
import ProductList from '../product-list/productList.component';

const ProductCollection = ({title, items}) => (
  <div className="collection-preview">
    <div className="title">{ title.toUpperCase() }</div>
    <div className="preview">
    {
      items
      .filter((items, id) => id<4)
      .map( (items) => (
        <ProductList key={items.id} item={items} />
       ))
    }
    </div>
  </div>
);

export default ProductCollection;
