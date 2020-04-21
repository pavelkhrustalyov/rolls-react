import React from 'react';
import { connect } from 'react-redux';
import { increaseFromCart, decreaseFromCart } from '../redux/cart/cart-actions';
import PropTypes from 'prop-types';

const CartItem = ({ item, increaseFromCart, decreaseFromCart }) => {
    const {
        id,
        title,
        total,
        weight,
        price,
        img,
        counter } = item;
    return (
        <div className="cart-item parent">
            <div className="cart-item__top">
                <div className="cart-item__img">
                    <img src={img} alt="roll" />
                </div>
                <div className="cart-item__desc">
                    <div className="cart-item__title">{title}</div>
                    <span><small className="text-muted">{total - counter} шт.</small></span>
                    <span className="cart-item__weight price__weight">/ {weight * counter}г.</span>

                    <div className="cart-item__details">
                        <div className="items items--small">
                            <div onClick={() => decreaseFromCart(id)} className="items__control">-</div>
                            <div className="items__current">{counter}</div>
                            <div onClick={() => increaseFromCart(id)} className="items__control">+</div>
                        </div>

                        <div className="price">
                            <div className="price__currency">{price * counter} ₽</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    increaseFromCart: PropTypes.func.isRequired,
    decreaseFromCart: PropTypes.func.isRequired
};

export default connect(null, { increaseFromCart, decreaseFromCart })(CartItem);