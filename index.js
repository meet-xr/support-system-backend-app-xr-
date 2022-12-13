const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = process.env.PORT || 4000;

//connect to  server
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
