import React, { useState } from 'react';

import { Filter } from '../Filter';

import Game from '../Game';

import './style.css';

export function Main(props) {
    const { games, addToCart } = props;
    const [sort, setSort] = useState('');
    
    listProducts();

    function handleChangeSort(e) {
        setSort(e.target.value);
        listProducts();
    }

    function listProducts() {
        if(sort === '1') {
            games.sort((a, b) =>{
                return b.price - a.price;
            })
        }
        if(sort === '2') {
            games.sort((a, b) =>{
                return a.price - b.price;
            })
        }
        if(sort === '3') {
            games.sort((a, b) =>{
                return b.score - a.score;
            })
        }
        if(sort === '4') {
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
        return(games);
    }
    

    return (
        <main className="col-2">
            <div className="game-list-title">
                <h2>Jogos</h2>
                <Filter sort={sort} handleChangeSort={handleChangeSort}/>
            </div>
            <div className="cards">
                {games.map((game) => (
                    <Game key={game.id} game={game} addToCart={addToCart}></Game>
                ))}
            </div>
        </main>
    );
}