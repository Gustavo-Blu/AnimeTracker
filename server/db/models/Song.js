const Sequelize = require('sequelize');
const db = require('../db');

const Song = db.define('song', {
  title: {
    type: Sequelize.STRING,
    unique: true,
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
      'https://yt3.ggpht.com/8cd9vG0u0Mxe53OFiFIpfR8SSKS5FPSAHgMyJN3szWc08bYMHHctXc6DGGDGdy7j59Ia6dnP7WE=s900-c-k-c0x00ffffff-no-rj',
  },
});

module.exports = Song;
