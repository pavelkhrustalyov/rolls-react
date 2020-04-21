import React from 'react';
import { connect } from 'react-redux';
import { increaseRoll, decreaseRoll } from '../redux/rolls/rolls-actions';
import { addToCart } from '../redux/cart/cart-actions';
import PropTypes from 'prop-types';

const RollItem = ({ item, increaseRoll, decreaseRoll, addToCart }) => {
    const {
        id,
        title,
        total,
        weight,
        price,
        img,
        counter} = item;
        
    return (
        <div className="col-md-6 parent">
            <div className="card mb-4">
                <img className="product-img" src={img} alt={title} />
                <div className="card-body text-center">
                    <h4 className="item-title">{title}</h4>
                    <p><small className="text-muted">{total - counter} шт.</small></p>
                    <div className="details-wrapper">
                        <div className="items">
                            <div className="items__control" onClick={() => decreaseRoll(id)}>-</div>
                            <div className="items__current">{counter}</div>
                            <div className="items__control" onClick={() => increaseRoll(id)}>+</div>
                        </div>
                        <div className="price">
                            <div className="price__weight">{weight * counter}г.</div>
                            <div className="price__currency">{price * counter} ₽</div>
                        </div>
                    </div>
                    <button onClick={() => addToCart(item)} type="button" className="btn btn-cart btn-block btn-outline-warning">+ в корзину</button>
                </div>
            </div>
        </div>
    );
}

RollItem.propTypes = {
    addToCart: PropTypes.func.isRequired,
    increaseRoll: PropTypes.func.isRequired,
    decreaseRoll: PropTypes.func.isRequired
};


export default connect(null, { increaseRoll, decreaseRoll, addToCart })(RollItem);