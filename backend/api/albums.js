const express = require('express');
const { addAsync } = require('@awaitjs/express');
const models = require('../models');
const crawl = require('../helper/crawl');

const router = addAsync(express.Router());

router.getAsync('/', async (req, res, next) => {
  const albums = await models.Album.findAll({
    include: [models.Song],
  });
  res.json({
    albums,
  });
});

router.getAsync('/:id', async (req, res, next) => {
  const album = await models.Album.findByPk(req.params.id, {
    include: [models.Song],
  });
  res.json({
    album,
  });
});

router.postAsync('/', async (req, res, next) => {
  try {
    const rs = await crawl(req.body.url);
    if (rs.error) {
      res.json({
        error: rs.error
      });
      return;
    }

    const result = await models.sequelize.transaction(async (t) => {
      const singer = await models.Singer.create({
        name: rs.singerName,
      }, { transaction: t });

      const album = await singer.createAlbum({
        name: rs.albumName,
        cover_url: rs.cover_url,
      }, { transaction: t });

      for (const song of rs.tracks) {
        await album.createSong({
          name: song
        }, { transaction: t });
      }

      return album;
    });

    res.json({
      success: result
    });
  } catch (e) {
    console.log(e);
  }
});

router.deleteAsync('/:id', async (req, res, next) => {
  const album = await models.Album.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    album,
  });
});

module.exports = router;
