const request = require('supertest');

const app = require('../app');

describe('Album', () => {
  before(() => require('../models').sequelize.sync({ force: true }));

  it('GET /api/v1/albums', (done) => {
    request(app)
      .get('/api/v1/albums')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          albums: []
        },
        done
      );
  });

  it('GET /api/v1/albums/:id', (done) => {
    request(app)
      .get('/api/v1/albums/10')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          album: null
        },
        done
      );
  });

  it('POST /api/v1/albums', (done) => {
    request(app)
      .post('/api/v1/albums')
      .send({
        url: 'https://music.douban.com/subject/3236064/'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(/不要停止我的音乐/, done);
  });

  it('DELETE /api/v1/albums/:id', (done) => {
    request(app)
      .delete('/api/v1/albums/10')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          album: 0
        },
        done
      );
  });
});
