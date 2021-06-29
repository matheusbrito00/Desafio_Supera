import React from 'react';
import cartImg from '../../assets/images/cart-icon.svg';

import './style.css';

export function Header(props) {
    const { countCartItems } = props;
    return (
        <header>
            <div>
                <h1>Supera Games</h1>
            </div>
            <div className="cartContainer">
                <a className="cart" href="#/cart">
                    <img id="cartImg" src={cartImg} alt="Carrinho de compras" />
                    {''}
                    {countCartItems ? (
                        <p id="cartCount">{countCartItems}</p>
                    ) : ('')}
                </a>
            </div>
        </header>
    );
}