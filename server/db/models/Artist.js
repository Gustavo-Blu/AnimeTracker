const Sequelize = require('sequelize');
const db = require('../db');

const Artist = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'unknown',
  },
  isFav: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
});

module.exports = Artist;
