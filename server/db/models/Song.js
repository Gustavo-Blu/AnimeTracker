const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  isFav: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  songUrl: {
    type: Sequelize.STRING,
  },
  songType: {
    type: Sequelize.ENUM('Opening', 'Ending', 'Background'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isOpening: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.songType === 'Opening';
    },
  },
  isEnding: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.songType === 'Background';
    },
  },
  isBackground: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.songType === 'Background';
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.kindpng.com/picc/m/7-77504_music-notes-png-transparent-music-note-clipart-png.png',
  },
});

module.exports = Song;
