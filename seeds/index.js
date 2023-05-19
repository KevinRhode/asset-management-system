const sequelize = require('../config/connection');
const { Asset, Type, Location } = require('../models');

const assetData = require('./assetData.json');
const typeData = require('./typeData.json');
const locationData = require('./locationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Type.bulkCreate(typeData, {
    individualHooks: true,
    returning: true,
  }); 

  await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  }); 
  await Asset.bulkCreate(assetData, {
    individualHooks: true,
    returning: true,
  }); 

  process.exit(0);
};

seedDatabase();
