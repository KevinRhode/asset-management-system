const User = require('./user');
const Comment = require('./comment');
const Asset = require('./asset');
const Type = require('./type');
const Location = require('./location');

User.hasMany(Comment,{
    foreignKey: 'user_id',
});
Asset.hasOne(Type,{
    foreignKey:'type_id',
});
Asset.hasOne(Location,{
    foreignKey: 'location_id',
});
Asset.hasMany(Comment,{
    foreignKey:'asset_id'
});
Type.belongsTo(Asset,{
    foreignKey: 'type_id',
});
Location.belongsTo(Asset,{
    foreignKey:'location_id',
});
Comment.belongsTo(User,{
    foreignKey:'user_id'
  });
Comment.belongsTo(Asset,{
  foreignKey:'asset_id'
});





module.exports = { User, Comment, Asset, Type, Location};
