const http = require("http");

const server = http.createServer(function(req, res) {
  if (req.url == "/") {
    res.write("hello world");
    res.end();
  }
});

if (server.listen(2222)) {
  console.log("server is running on port 2222");
} else {
  console.log("something error");
}
