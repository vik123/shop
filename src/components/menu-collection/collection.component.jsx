import React from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import MenuItems from '../menu-items/menuItems.component';

const ProductMenu = ({ productMenus }) => (
  <div className='directory-menu'>
    {
        productMenus.map(menus => (
            <MenuItems key={menus.id} title={menus.title} imageUrl={menus.imageUrl} size={menus.size} linkUrl={menus.linkUrl} />
        ))
    }
  </div>
);

const mapStateToProps = state => ({
  productMenus: state.productCollection.productMenus
});

export default connect(mapStateToProps)(ProductMenu);