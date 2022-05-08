const router = require('express').Router();
const { User, Artist, Song, Show, Playlist } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.findAll({});
    res.json(artists);
  } catch (err) {
    next(err);
  }
});
