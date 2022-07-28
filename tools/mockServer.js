
/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "mockSnapshot.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 1000);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
