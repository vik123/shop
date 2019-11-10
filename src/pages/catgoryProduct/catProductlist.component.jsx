import React from 'react';
import  withSpinner  from '../../components/with-spinner/withSpinner.component';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collectionOverview/collectionOverview.component';
import './catProductlist.styles.scss';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);

class CatProductList extends React.Component{

    state = {
         isloading: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isloading: false})
        }, 1500);
    }

    render(){

        const { isloading } = this.state;
        const { products, match } = this.props;

        return(
            <div className='collection-page'>
                { products.map((products) => (
                     products.routeName === match.params.catname ? <CollectionOverviewWithSpinner isloading={isloading} key={products.id} items={products.items} /> : '' 
                ))}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    products: state.shop.shopData
});

export default connect(mapStateToProps)(CatProductList);