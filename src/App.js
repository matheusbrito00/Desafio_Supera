import { Header } from './components/Header';
import { Main } from './components/Main';
import { Cart } from './components/Cart';
import data from './data';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function addToCart (game){
    const gameExist = cartItems.find(x => x.id === game.id);

    if(gameExist) {
      setCartItems(cartItems.map(x => x.id === game.id ? {...gameExist, qtd: gameExist.qtd + 1} : x));
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, 1));
    } else {
      setCartItems([...cartItems, {...game, qtd: 1}]);
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, 1));
    }
  }

  function removeToCart (game) {
    const gameExist = cartItems.find(x => x.id === game.id);

    if(gameExist.qtd === 1) {
      setCartItems(cartItems.filter((x) => x.id !== game.id))
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, (-1)));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === game.id ? {...gameExist, qtd: gameExist.qtd - 1} : x
        )
      );
      setCartItemsCount(cartItems.reduce((a, c) => a + c.qtd, (-1)));
    }
  }
  
  function removeAllToCart () {
    setCartItems([]);
    setCartItemsCount(0);
  }
  
  return (
    <div>
      <Header countCartItems={cartItemsCount}></Header>
      <div className="row">
        <Main addToCart={addToCart} games={data}></Main>
        <Cart 
          addToCart={addToCart} 
          removeToCart={removeToCart}
          removeAllToCart={removeAllToCart}
          cartItems={cartItems}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
