const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Artist, Song, Show, Playlist } = require('../db');
const { requireToken, isAdmin } = require('./gateKeepingMiddleware');
module.exports = router;

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'imageUrl'],
      include: [
        { model: Artist },
        { model: Show },
        { model: Song },
        { model: Playlist },
      ],
      order: [
        ['id', 'ASC'],
        [Artist, 'id', 'ASC'],
        [Show, 'id', 'ASC'],
        [Song, 'id', 'ASC'],
        [Playlist, 'id', 'ASC'],
      ],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const [user, isCreated] = await User.findOrCreate({
      where: {
        [Op.or]: [{ email: req.body.email }, { username: req.body.username }],
      },
      defaults: req.body,
    });

    if (!isCreated) {
      const err = new Error(
        req.body.email === user.email
          ? 'email already exists'
          : 'username already exists'
      );
      err.status = 401;
      throw err;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const user = await User.findByPk(req.params.id, {
        include: [
          { model: Artist },
          { model: Show },
          { model: Song },
          { model: Playlist },
        ],
        order: [
          ['id', 'ASC'],
          [Artist, 'id', 'ASC'],
          [Show, 'id', 'ASC'],
          [Song, 'id', 'ASC'],
          [Playlist, 'id', 'ASC'],
        ],
      });

      if (!user) return next();

      await user.update(req.body);
      res.json(user);
    } else {
      const user = await User.findByPk(req.user.id, {
        include: [
          { model: Artist },
          { model: Show },
          { model: Song },
          { model: Playlist },
        ],
        order: [
          ['id', 'ASC'],
          [Artist, 'id', 'ASC'],
          [Show, 'id', 'ASC'],
          [Song, 'id', 'ASC'],
          [Playlist, 'id', 'ASC'],
        ],
      });

      if (!user) return next();

      await user.update(req.body);
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) return next();

    res.json(user);
  } catch (error) {
    next(error);
  }
});
