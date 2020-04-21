import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const initialState = {};
const middlewares = [ thunk ];

export default createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middlewares)
));

