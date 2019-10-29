import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SingInAndSignUpPage from './pages/singin-and-signup/singin-and-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from '../src/redux/actions/userAction';
import CatProductList from './pages/catgoryProduct/catProductlist.component';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
            setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
              })
        })
      }
      
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
     const { currentUser } = this.props;
      return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/shop/:catname' component={CatProductList} />
              <Route exact path='/signIn' render={ () => currentUser ? <Redirect to='/' /> : <SingInAndSignUpPage /> } />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
          </div>
      )
  }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
