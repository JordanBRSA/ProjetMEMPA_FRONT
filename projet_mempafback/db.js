const { Sequelize } = require('sequelize');
const initModels= require('./models/init-models');

module.exports = class MusicApp {
    constructor() {
        this.sequelize = new Sequelize('mysql://root:@localhost:3306/mempa');

        this.models = initModels(this.sequelize);
    }
};
