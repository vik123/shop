import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer'
import cartReducer from './cartReducer';
import productCollectionReducer from './productCollectionReducer';
import shopReducer from './shopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    productCollection: productCollectionReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); 

