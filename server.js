// server.js
const fastify = require("fastify")({ logger: { level: "error" } });
const next = require("next");
const routes = require("./src/configs/routes");

const port = parseInt(process.env.PORT, 10) || 3003;
const app = next({ dev: process.env.NODE_ENV !== "production" });

app.prepare().then(() => {
  fastify.use(routes.getRequestHandler(app)).listen(port, (err, address) => {
    if (err) throw err;
    console.log(`> Ready on ${address}`);
  });
});
