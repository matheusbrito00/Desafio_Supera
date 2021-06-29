import React from 'react';

import './style.css';

export function Filter(props) {
    const {sort, handleChangeSort} = props;

    return (
        <div className="orderby">
            <p id="title-orderby">Ordenar por:</p>
            <select
                value={sort}
                onChange={handleChangeSort}
            >
                <option value="1">Maior preço</option>
                <option value="2">Menor preço</option>
                <option value="3">Popularidade</option>
                <option value="4">Ordem Alfabética</option>
            </select>
        </div>
    )
}