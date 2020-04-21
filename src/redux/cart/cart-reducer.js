import { ADD_TO_CART, INCREASE_FROM_CART, DECREASE_FROM_CART, CLEAR_CART } from './cart-types';
import { addToCart } from './cart-utils';
import { increase } from '../rolls/rolls-utils';
import { decrease } from './cart-utils';

const initialState = {
    cartItems: []
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, payload)
            }
        case INCREASE_FROM_CART:
            return {
                ...state,
                cartItems: increase(state.cartItems, payload)
            }
        case DECREASE_FROM_CART:
            return {
                ...state,
                cartItems: decrease(state.cartItems, payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
};