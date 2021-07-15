import products from './data/products.json';

const data = products.map(games => {
    return games;
});

data.sort((a, b) =>{
    return b.price - a.price;
});

export default data;