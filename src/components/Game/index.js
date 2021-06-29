import React from 'react';

import './style.css';

export default function Game(props){
    const { game, addToCart } = props;
    return (
        <div className="card" key={game.id}>
            <div className="card-img">
                <img src={require(`../../assets/images/${game.image}`).default} alt={game.name} />
            </div>
            <div className="card-info">
                <p>{game.name}</p>
                <p>Score: <span>{game.score}</span></p>
                <h4>R$ {game.price}</h4>
            </div>
            <button onClick={() => addToCart(game)}>Adicionar ao Carrinho</button>
        </div>
    );
}