import React, { useEffect, useState } from 'react';
import cartImg from '../../assets/images/cart-icon.svg';

import './style.css';

export function Header() {
    const [countCartItems, setCountCartItems] = useState(0);

    useEffect(() => {
        setCountCartItems(localStorage.getItem("cartCount"));
      }, []);

    return (
        <header>
            <div>
                <h1>Supera Games</h1>
            </div>
            <div className="cartContainer">
                <a className="cart" href="/cart">
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