const router = require('express').Router();
const { User, Artist, Song, Show, Playlist } = require('../db');
const { requireToken, isAdmin } = require('./gateKeepingMiddleware');
module.exports = router;

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const artists = await Artist.findAll({
      attributes: ['id', 'name', 'isFav', 'imageUrl'],
      include: { model: Song },
      order: [
        ['id', 'ASC'],
        [Song, 'id', 'ASC'],
      ],
    });
    res.json(artists);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    const [artist, isCreated] = await Artist.findOrCreate({
      where: {
        name: req.body.name,
        userId: req.user.id,
      },
      defaults: req.body,
    });

    if (!isCreated) {
      const err = new Error('artist has already exist');
      err.status = 409;
      throw err;
    }

    res.status(201).json(artist);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const artist = await Artist.findByPk(req.params.id, {
        include: Song,
        order: [[Song, 'id', 'ASC']],
      });

      if (!artist) return next();

      await artist.update(req.body);
      res.json(artist);
    } else {
      const artist = await Artist.findByPk(req.params.id, {
        where: { userId: req.user.id },
        include: Song,
        order: [[Song, 'id', 'ASC']],
      });

      if (!artist) return next();

      await artist.update(req.body);
      res.json(artist);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const artist = await Artist.findByPk(req.params.id);

      if (!artist) return next();

      res.json(artist);
    } else {
      const artist = await Artist.findByPk(req.params.id, {
        where: { userId: req.user.id },
      });

      if (!artist) return next();

      res.json(artist);
    }
  } catch (error) {
    next(error);
  }
});
