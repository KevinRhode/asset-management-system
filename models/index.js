

// somethielse

const Comment = require('./comment');
const Asset = require('./asset');
const Type = require('./type');
const User = require('./user');
const Location = require('./location');

Asset.belongsTo(Location);
Asset.belongsTo(Type);
Asset.hasMany(Comment);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = { User, Comment, Asset, Type, Location};
