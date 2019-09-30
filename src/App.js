import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const Hats = () => (
  <div>Hats</div>
)

function App() {
  return (
    <BrowserRouter >
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/hats' component={Hats} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
