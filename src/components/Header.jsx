import React from 'react';
import logo from '../assets/img/logo/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container text-center">
                <img src={logo} width="92" alt="Суши и пицца" />
                <div className="display-4">Доставка роллов</div>
                <p className="lead">Оперативно и вкусно</p>
            </div>
        </header>
    );
}
 
export default Header;