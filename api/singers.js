const express = require('express');
const addAsync = require('@awaitjs/express').addAsync;
const models = require('../models');

const router = addAsync(express.Router());

router.getAsync('/:id', async (req, res, next) => {
  let singer = await models.Singer.findByPk(req.params.id, {
    include: [models.Album],
  })
  res.json({
    singer,
  });
});

router.deleteAsync('/:id', async (req, res, next) => {
  let singer = await models.Singer.destroy({
    where: {
      id: req.params.id,
    },
  })
  res.json({
    singer,
  });
});

module.exports = router;