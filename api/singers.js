const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/:id', (req, res) => {
  models.Singer.findByPk(req.params.id, {
    include: [models.Album],
  }).then((singer) => {
    res.json({
      singer,
    });
  });
});

router.delete('/:id', (req, res) => {
  models.Singer.destroy({
    where: {
      id: req.params.id,
    },
  }).then((singer) => {
    res.json({
      singer,
    });
  });
});

module.exports = router;
