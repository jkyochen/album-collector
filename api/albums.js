const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  models.Album.findAll({
    include: [models.Song],
  }).then((albums) => {
    res.json({
      albums,
    });
  });
});

router.get('/:id', (req, res) => {
  models.Album.findByPk(req.params.id, {
    include: [models.Song],
  }).then((album) => {
    res.json({
      album,
    });
  });
});

router.post('/create', function(req, res) {
  req.body.crawl_url

  models.Album.create({
    name: req.body.name
  }).then(function() {

  });
});

router.post('/', (req, res) => {
  models.Album.findAll({
    include: [models.Song],
  }).then((albums) => {
    res.json({
      albums,
    });
  });
});

router.delete('/:id', (req, res) => {
  models.Album.destroy({
    where: {
      id: req.params.id,
    },
  }).then((album) => {
    res.json({
      album,
    });
  });
});

module.exports = router;