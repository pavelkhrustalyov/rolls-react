import React, { useState } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { clearCart } from '../redux/cart/cart-actions';
import PropTypes from 'prop-types';

const Checkout = ({ cart, clearCart }) => {

    const [ number, setNumber ] = useState('');
    const [ validate, setValidate ] = useState(true);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (number.length === 0) {
            setValidate(false);
            return;
        }
        if (validate) {
            alert('Спасибо за заказ!');
            console.log(cart);
            setNumber('');
            clearCart();
        }
    };

    const onChangeInput = (e) => {
        setNumber(e.target.value);
        const regExp = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        const valid = regExp.test(number);
        setValidate(valid);
    };

    return (
        <div className="card-body border-top">
            <h5 className="card-title">Оформить заказ</h5>

            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    {
                        !validate ? 
                            <p className="label_error">Введите корректный номер телефона!</p>
                        : null
                    }
                    <input
                        type="text"
                        className={classnames("form-control", {
                            "error": !validate
                        })}
                        placeholder="Ваш номер телефона"
                        onChange={onChangeInput}
                        value={number}
                    />
                </div>
                <button type="submit" id="checkout" className="btn btn-primary">Заказать</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cart: cartItems
});

Checkout.propTypes = {
    clearCart: PropTypes.func
};

export default connect(mapStateToProps, { clearCart })(Checkout);