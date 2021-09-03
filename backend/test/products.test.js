const supertest = require("supertest");
const { app, server } = require("../src/index");
const mongoose = require("mongoose");

const api = supertest(app);

// * Test get all products

test("should return a json", async () => {
  await api
    .get("/api/products")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});
