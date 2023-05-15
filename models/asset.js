const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Asset extends Model {}

Asset.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'location',
          key: 'id',
        },
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'type',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'asset',
    }
  );
  
  module.exports = Asset;
  