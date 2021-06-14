const foods = require('./foods.json');
const users = require('./users.json');
const addresses = require('./addresses.json');
const cards = require('./cards.json');
const orders = require('./orders.json');

module.exports = () => ({
    foods: foods,
    users: users,
    addresses: addresses,
    cards: cards,
    orders: orders
});