const request = require('supertest');

const app = require('../app');

describe('GET /api/v1', () => {
  before(() => require('../models').sequelize.sync({ force: true }));

  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          singers: []
        },
        done
      );
  });
});
