const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize; 

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); //for deployment to jawdb
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,//db name when dev on local
    process.env.DB_USER,//db user when dev on local
    process.env.DB_PASSWORD,//db user password when dev on local
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;