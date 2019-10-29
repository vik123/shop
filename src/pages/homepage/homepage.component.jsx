import React from 'react';
import './home.styles.scss';

import ProductMenu from '../../components/menu-collection/collection.component';

const HomePage = () => {
  return(
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <ProductMenu />
    </div>
)};

export default HomePage;