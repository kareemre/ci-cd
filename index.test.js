const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello from Dockerized CI/CD!"));

test("GET / should return 'Hello from Dockerized CI/CD!'", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello from Dockerized CI/CD!");
});
