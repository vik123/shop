import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/' >
            <Logo className="logo" />
        </Link> 
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>

            {
                currentUser ?
                    (
                        <Link className="option" onClick={ () => auth.signOut()}
                     >Logout</Link>
                     )
                :

                (
                    <Link className="option" to="/signIn">SignIn</Link>
                    )

            }
            
        </div>
    </div>
)

export default Header;