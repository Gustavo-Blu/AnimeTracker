//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Artist = require('./models/Artist');
const Show = require('./models/Show');
const Song = require('./models/Song');
const Playlist = require('./models/Playlist');

//associations could go here!
User.hasMany(Artist);
Artist.belongsTo(User);

User.hasMany(Show);
Show.belongsTo(User);

User.hasMany(Song);
Song.belongsTo(User);

User.hasMany(Playlist);
Playlist.belongsTo(User);

//----------------------------
Show.belongsToMany(Song, { through: 'soundtrack' });
Song.belongsToMany(Show, { through: 'soundtrack' });

Artist.belongsToMany(Song, { through: 'disc' });
Song.belongsToMany(Artist, { through: 'disc' });

Playlist.belongsToMany(Song, { through: 'playlistSong' });
Song.belongsToMany(Playlist, { through: 'playlistSong' });

module.exports = {
  db,
  User,
  Artist,
  Show,
  Song,
};
