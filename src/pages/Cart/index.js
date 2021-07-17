import React, { useEffect, useState } from 'react';
import './styles.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const gamesPrice = cartItems.reduce((a, c) => a + c.price * c.qtd, 0);
  const taxaFrete = gamesPrice > 250 ? 0 : cartItems.reduce((a, c) => a + c.qtd * 10, 0);
  const totalPrice = gamesPrice + taxaFrete;

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartArray")));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartCount', cartItemsCount);
  }, [cartItemsCount]);

  function addToCart(game) {
    const gameExist = cartItems.find(x => x.id === game.id);

    if (gameExist) {
      setCartItems(cartItems.map(x => x.id === game.id ? { ...gameExist, qtd: gameExist.qtd + 1 } : x));
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, 1));
    } else {
      setCartItems([...cartItems, { ...game, qtd: 1 }]);
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, 1));
    }
  }

  function removeToCart(game) {
    const gameExist = cartItems.find(x => x.id === game.id);

    if (gameExist.qtd === 1) {
      setCartItems(cartItems.filter((x) => x.id !== game.id))
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, (-1)));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === game.id ? { ...gameExist, qtd: gameExist.qtd - 1 } : x
        )
      );
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, (-1)));
    }
  }

  function handleFinalizaVenda() {
    setCartItems([]);
    alert('Compra finalizada com sucesso!');
  }

  return (
    <div className="container">
      <div className="cart-list-title">
        <h1>Meu Carrinho</h1>
        <a href='/'>Continuar comprando</a>
      </div>
      <div>{cartItems.length === 0 && <strong className="empty">Carrinho Vazio</strong>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="item">
          <div>{item.name}</div>
          <div>
            <button onClick={() => addToCart(item)} className="add"> + </button>
            <button onClick={() => removeToCart(item)} className="remove"> - </button>
          </div>
          <div>
            {item.qtd} x R${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="finaliza-compra">
            <div>Subtotal</div>
            <div>R${gamesPrice.toFixed(2)}</div>
          </div>
          <div className="finaliza-compra">
            <div>Frete</div>
            <div>R${taxaFrete.toFixed(2)}</div>
          </div>
          <div className="finaliza-compra">
            <div><strong>Total</strong></div>
            <div><strong>R${totalPrice.toFixed(2)}</strong></div>
          </div>
          <div className="finaliza-compra-button">
            <button onClick={handleFinalizaVenda}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}