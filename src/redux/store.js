import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/reducer/rootReducer';

import logger from 'redux-logger';

const middleware = [logger];

const store =  createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

export default store;