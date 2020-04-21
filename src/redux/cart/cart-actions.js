import { ADD_TO_CART, INCREASE_FROM_CART, DECREASE_FROM_CART, CLEAR_CART } from './cart-types';


export const addToCart = (item) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    });
};

export const increaseFromCart = (id) => (dispatch) => {
    dispatch({
        type: INCREASE_FROM_CART,
        payload: id
    });
};

export const decreaseFromCart = (id) => (dispatch) => {
    dispatch({
        type: DECREASE_FROM_CART,
        payload: id
    });
};

export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART });
};