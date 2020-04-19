const express = require('express');
const { addAsync } = require('@awaitjs/express');
const models = require('../models');

const router = addAsync(express.Router());

const albumsRouter = require('./albums');
const singersRouter = require('./singers');

router.getAsync('/', async (req, res, next) => {
  const singers = await models.Singer.findAll({
    include: [models.Album],
  });
  res.json({
    singers,
  });
});

router.use('/albums', albumsRouter);
router.use('/singers', singersRouter);

module.exports = router;
