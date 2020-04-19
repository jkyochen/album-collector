const express = require('express');
const models = require('../models');

const router = express.Router();

const albumsRouter = require('./albums');
const singersRouter = require('./singers');

router.get('/', (req, res) => {
  models.Singer.findAll({
    include: [models.Album],
  }).then((singers) => {
    res.json({
      singers,
    });
  });
});

router.use('/albums', albumsRouter);
router.use('/singers', singersRouter);

module.exports = router;
