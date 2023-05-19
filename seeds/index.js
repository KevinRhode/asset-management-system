const sequelize = require('../config/connection');
const { Asset } = require('../models');

const assetData = require('./assetData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Asset.bulkCreate(assetData, {
    individualHooks: true,
    returning: true,
  }); 

  process.exit(0);
};

seedDatabase();
