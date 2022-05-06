const Sequelize = require('sequelize');
const db = require('../db');

const Show = db.define('show', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isFav: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      max: 10,
      min: 0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  reveiw: {
    type: Sequelize.TEXT,
    defaultValue: '',
  },
  startDate: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date(),
  },
  endDate: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date(),
  },
  episodeTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  currentEp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Show;
