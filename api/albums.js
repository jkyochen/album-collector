const express = require('express');
const addAsync = require('@awaitjs/express').addAsync;
const models = require('../models');

const router = addAsync(express.Router());

router.getAsync('/', async (req, res, next) => {
  let albums = await models.Album.findAll({
    include: [models.Song],
  });
  res.json({
    albums,
  });
});

router.getAsync('/:id', async (req, res, next) => {
  let album = await models.Album.findByPk(req.params.id, {
    include: [models.Song],
  });
  res.json({
    album,
  });
});

router.postAsync('/create', async (req, res, next) => {
  req.body.crawl_url

  models.Album.create({
    name: req.body.name
  }).then(function() {

  });
});

router.postAsync('/', async (req, res, next) => {
  let albums = await models.Album.findAll({
    include: [models.Song],
  });
  res.json({
    albums,
  });
});

router.deleteAsync('/:id', async (req, res, next) => {
  let album = await models.Album.destroy({
    where: {
      id: req.params.id,
    },
  })
  res.json({
    album,
  });
});

module.exports = router;