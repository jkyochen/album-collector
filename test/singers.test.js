const request = require("supertest");

const app = require("../app")

describe("GET /api/v1/singers/:id", () => {
  it("responds with a json message", (done) => {
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
});

describe("DELETE /api/v1/singers/:id", () => {
  it("responds with a json message", (done) => {
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
