const User = require('./User');
const Comment = require('./Comment');
const Asset = require('./Asset');
const Type = require('./Type');
const Location = require('./Location');

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
