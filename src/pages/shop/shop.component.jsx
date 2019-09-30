import React from 'react';
import ShopData from './shop.data.component';
import ShopList from '../../components/shop/ShopList.component';


class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            products: ShopData
        }
    }

    render(){
        const { products } = this.state;
        return(
            <div className="shop-page">
            { 
                products
                .map(({id, ...otherShopProps}) => (
                    <ShopList key={id} {...otherShopProps} />
                ))
            
            }
            </div>
        )
    }

}

export default Shop;