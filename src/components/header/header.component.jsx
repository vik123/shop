import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, cart }) => (
    <div className="header">
        <Link className="logo-container" to='/' >
            <Logo className="logo" />
        </Link> 
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>Logout</div>):
                (<Link className="option" to="/signIn">SignIn</Link>)
            }
            
            <CartIcon />

        </div>
        {
            cart.hidden ? null : <CartDropdown />
        }    
        

    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    cart: state.cart
})

export default connect(mapStateToProps)(Header);