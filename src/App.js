import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const Hats = () => (
  <div>Hats</div>
)

function App() {
  return (
    <BrowserRouter >
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={Hats} />
      </div>
    </BrowserRouter>
  );
}

export default App;
