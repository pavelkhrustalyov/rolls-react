import { combineReducers } from 'redux';
import rollReducer from './rolls/rolls-reducer';
import cartReducer from './cart/cart-reducer';

export default combineReducers({
    rolls: rollReducer,
    cart: cartReducer
});