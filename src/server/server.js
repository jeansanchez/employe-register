const http = require("http");
const { getDataHandle, postDataHandle } = require("./util/generalFunction");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  // logger
  console.log(`URL: ${url}, Method: ${method}`);
  switch (method) {
    case "GET":
      if (url === "/api/employees") {
        getDataHandle(req, res);
      }
      break;
    case "POST":
      if (url === "/api/employees") {
        postDataHandle(req, res);
      }
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`listening on http://${hostname}:${port}`);
});
