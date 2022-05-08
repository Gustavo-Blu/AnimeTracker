const router = require('express').Router();
const { User, Artist, Song, Show, Playlist } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const playlists = await Playlist.findAll({});
    res.json(playlists);
  } catch (err) {
    next(err);
  }
});
