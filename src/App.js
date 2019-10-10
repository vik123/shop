import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SingInAndSignUpPage from './pages/singin-and-signup/singin-and-signup.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const Hats = () => (
  <div>Hats</div>
)

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
       
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
              }
            }, () => console.log(this.state.currentUser))
        })

      }
      
      this.setState({ currentUser: userAuth});

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <BrowserRouter>
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/shop/hats' component={Hats} />
              <Route exact path='/signIn' component={SingInAndSignUpPage} />
            </Switch>
          </div>
        </BrowserRouter>
      )
  }
}

export default App;
