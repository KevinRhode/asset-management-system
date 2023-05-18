
const User = require('./User');
const Comment = require('./Comment');
const Asset = require('./Asset');
const Type = require('./Type');
const Location = require('./Location');

Asset.belongsTo(Location);
Asset.belongsTo(Type);
Asset.hasMany(Comment);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = { User, Comment, Asset, Type, Location};
