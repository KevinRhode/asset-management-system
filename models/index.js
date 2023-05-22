//ok asdlfjalskdjfa;lksdf
const Asset = require('./Asset');
const Comment = require('./Comment');
const Type = require('./Type');
const User = require('./user');
const Location = require('./Location');

Asset.belongsTo(Location);
Asset.belongsTo(Type);
Asset.hasMany(Comment);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = { User, Comment, Asset, Type, Location};
