const User = require('./User');
const Comment = require('./Comment');
const Asset = require('./Asset');
const Type = require('./Type');
const Location = require('./Location');

User.hasMany(Comment,{
    foreignKey: 'user_id',
});
Asset.hasOne(Type,{
    foreignKey:'id',
});
Asset.hasOne(Location,{
    foreignKey: 'id',
});
Asset.hasMany(Comment,{
    foreignKey:'id'
});
Type.belongsTo(Asset,{
    foreignKey: 'id',
});
Location.belongsTo(Asset,{
    foreignKey:'id',
});
Comment.belongsTo(User,{
    foreignKey:'user_id'
  });
Comment.belongsTo(Asset,{
  foreignKey:'asset_id'
});





module.exports = { User, Comment, Asset, Type, Location};
