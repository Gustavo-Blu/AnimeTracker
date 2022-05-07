const router = require('express').Router();
const { User, Artist, Song, Show, Playlist } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const songs = await Song.findAll({
      where: {},
    });
    res.json(songs);
  } catch (err) {
    next(err);
  }
});
