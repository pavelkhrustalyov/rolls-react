import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalPrice } from '../redux/cart/cart-selectors';
import PropTypes from 'prop-types';

const Cart = ({ cartItems, total }) => {

    const isEmpty = cartItems.length === 0;

    const emptyCart = (
        <div className="card mb-4" id="empty_cart">
            <div className="card-body">
                <h5 className="card-title">Ваш заказ</h5>
                <div className="alert alert-secondary" role="alert">
                    Корзина пуста
                </div>
            </div>
        </div>
    );

    const fullCart = (
        <div className="card cart_full-wrap">
            <div className="card-body">
                <h5 className="card-title">Ваш заказ</h5>
                <div className="cart-wrapper full-cart-wrap" id="full_cart">
                    {
                        !isEmpty ? cartItems.map(item => <CartItem key={item.id} item={item} />) : null
                    }
                </div>
                <div className="cart-total">
                    <p><span className="h5">Доставка:</span> <span className="delivery-cost free">бесплатно</span> </p>
                <p><span className="h5">Итого:</span> <span className="total-price">{total}</span> <span className="rouble">₽</span></p>
                </div>
            </div>

            <Checkout />
        </div>
    );
    return isEmpty ? emptyCart : fullCart;
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotalPrice
});

Cart.propTypes = {
    cartItems: PropTypes.array,
    total: PropTypes.number
};

export default connect(mapStateToProps)(Cart);