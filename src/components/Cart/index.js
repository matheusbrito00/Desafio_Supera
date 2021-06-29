import React from 'react';

import './style.css';

export function Cart(props) {
    const { cartItems, addToCart, removeToCart } = props;
    const gamesPrice = cartItems.reduce((a, c) => a + c.price * c.qtd, 0);
    const taxaFrete = gamesPrice > 250 ? 0 : cartItems.reduce((a, c) => a + c.qtd * 10, 0);
    const totalPrice = gamesPrice + taxaFrete;

    return (
        <aside className="col-1">
            <h2>Meu Carrinho</h2>
            <div>{cartItems.length === 0 && <strong>Carrinho Vazio</strong>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row item">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => addToCart(item)} className="add"> + </button>
                        <button onClick={() => removeToCart(item)} className="remove"> - </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qtd} x R${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Subtotal</div>
                        <div className="col-1 text-right">R${gamesPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Frete</div>
                        <div className="col-1 text-right">R${taxaFrete.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2"><strong>Total</strong></div>
                        <div className="col-1 text-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <div className="row">
                        <button onClick={() => alert('Compra Finalizada')}>
                            Finalizar Compra
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}