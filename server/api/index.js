const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/artists', require('./artists'));
router.use('/songs', require('./songs'));
router.use('/shows', require('./shows'));
router.use('/playlists', require('./playlists'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
