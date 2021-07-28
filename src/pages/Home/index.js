import React, { useEffect, useState } from 'react';
import data from '../../data/data';
import Game from '../../components/Game';

import './styles.css';
import { toast } from 'react-toastify';

export default function Home() {
  const [games] = useState(data);
  const [sort, setSort] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cartArray', JSON.stringify(cartItems));
  }, [cartItems]);

  sortProducts();

  function handleChangeSort(e) {
    setSort(e.target.value);
  }

  function sortProducts() {
    if (sort === 'maior_preco') {
      games.sort((a, b) => {
        return b.price - a.price;
      })
    }
    if (sort === 'menor_preco') {
      games.sort((a, b) => {
        return a.price - b.price;
      })
    }
    if (sort === 'popularidade') {
      games.sort((a, b) => {
        return b.score - a.score;
      })
    }
    if (sort === 'alfabetica') {
      games.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1
        }
        return 0;
      })

    }
    return (games);
  }

  function addToCart (game){
    const gameExist = cartItems.find(x => x.id === game.id);

    if(gameExist) {
      setCartItems(cartItems.map(x => x.id === game.id ? {...gameExist, qtd: gameExist.qtd + 1} : x));
      setCartItemsCount(cartItemsCount + 1);
    } else {
      setCartItems([...cartItems, {...game, qtd: 1}]);
      setCartItemsCount(cartItemsCount + 1);
    }

    toast.success("Item adicionado ao carrinho!");
    console.log(cartItemsCount);
  }
  return (
    <>
      <div className="game-list-title">
        <h1>Jogos</h1>
        <div className="orderby">
          <p id="title-orderby">Ordenar por:</p>
          <select
            value={sort}
            onChange={handleChangeSort}
          >
            <option value="maior_preco">Maior preço</option>
            <option value="menor_preco">Menor preço</option>
            <option value="popularidade">Popularidade</option>
            <option value="alfabetica">Ordem Alfabética</option>
          </select>
        </div>
      </div>
      <div className="game-list">
        {games.map((game) => (
          <Game key={game.id} game={game} addToCart={addToCart}></Game>
        ))}
      </div>
    </>
  );
}