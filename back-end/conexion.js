const Sequelize = require('sequelize');
const path = 'mysql://root:1235212.acamicA@localhost:3307/dataWarehouse';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: true
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection with the dataBase is successfully');
    })
    .catch(err => {
        console.error('Connection error: ', err);
    })

module.exports = sequelize;