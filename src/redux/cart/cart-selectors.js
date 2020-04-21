import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + (item.counter * item.price), 0)
);
