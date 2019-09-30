import React from 'react';
import './collection.styles.scss';
import MenuItems from '../menu-items/menuItems.component';

class ProductMenu extends React.Component{
    constructor(){
        super();

        this.state = {
            productMenus: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    }

    render(){

        return(
            <div className='directory-menu'>
            {
                this.state.productMenus.map(menus => (
                    <MenuItems key={menus.id} title={menus.title} imageUrl={menus.imageUrl} size={menus.size} linkUrl={menus.linkUrl} />
                ))
            }
            </div>
        )

    }

}

export default ProductMenu;