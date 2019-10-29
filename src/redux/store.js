import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../redux/reducer/rootReducer';

import logger from 'redux-logger';

const middleware = [];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

export const store =  createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

export const persistor = persistStore(store);

export default { store, persistor};