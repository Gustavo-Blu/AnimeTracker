const router = require('express').Router();
const { User, Artist, Song, Show, Playlist } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const shows = await Show.findAll({});
    res.json(shows);
  } catch (err) {
    next(err);
  }
});
