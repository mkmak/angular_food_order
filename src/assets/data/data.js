const foods = require('./foods.json');
const users = require('./users.json');
const addresses = require('./addresses.json')

module.exports = () => ({
    foods: foods,
    users: users,
    addresses: addresses
});