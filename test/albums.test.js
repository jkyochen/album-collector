const request = require("supertest");

const app = require("../app")

describe("GET /api/v1/albums", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1/albums")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          albums: []
        },
        done
      );
  });
});

describe("GET /api/v1/albums/:id", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1/albums/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          album: null
        },
        done
      );
  });
});

describe("DELETE /api/v1/albums/:id", () => {
  it("responds with a json message", (done) => {
    request(app)
      .delete("/api/v1/albums/10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          album: 0
        },
        done
      );
  });
});
