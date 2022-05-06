//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Artist = require('./models/Artist');
const Show = require('./models/Show');
const Song = require('./models/Song');

//associations could go here!
User.hasMany(Artist);
Artist.belongsTo(User);

User.hasMany(Show);
Show.belongsTo(User);

User.hasMany(Song);
Song.belongsTo(User);

//----------------------------

module.exports = {
  db,
  User,
  Artist,
  Show,
  Song,
};
