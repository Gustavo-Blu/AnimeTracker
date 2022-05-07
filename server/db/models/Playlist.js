const Sequelize = require('sequelize');
const db = require('../db');

const Playlist = db.define('playlist', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://yt3.ggpht.com/8cd9vG0u0Mxe53OFiFIpfR8SSKS5FPSAHgMyJN3szWc08bYMHHctXc6DGGDGdy7j59Ia6dnP7WE=s900-c-k-c0x00ffffff-no-rj',
  },
});

module.exports = Playlist;
