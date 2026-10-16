const { app } = require("@azure/functions");
const { matmul } = require("../factory/benchmark");

app.http("matmul", {
  methods: ["GET"],
  authLevel: "function",
  handler: matmul,
});
