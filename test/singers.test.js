const request = require("supertest");

const app = require("../app")

describe("Singer", () => {

  before(function () {
      return require('../models').sequelize.sync({force: true});
  });

  it("GET /api/v1/singers/:id", (done) => {
    request(app)
      .get("/api/v1/singers/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          singer: null
        },
        done
      );
  });

  it("DELETE /api/v1/singers/:id", (done) => {
    request(app)
      .delete("/api/v1/singers/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          singer: 0
        },
        done
      );
  });
});
