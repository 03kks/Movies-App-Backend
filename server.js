
const http = require("http");
const httpStatus = require("http-status-codes");
const port = 9000;
const routeResponseMap = {
  "/movies": "All Movies Data in JSON format from Mongo DB",
  "/genres": "All Genres Data in JSON format from Mongo DB",
  "/artists": "All Artists Data in JSON format from Mongo DB",
};

const app = http.createServer((req, res) => {
  let url = req.url;
  if (routeResponseMap[url]) {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html",
    });
    res.write(routeResponseMap[url]);
    res.end();
  } else {
    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
      "Content-Type": "text/html",
    });
    res.write("Error: Page Not Found");
    res.end();
  }
});

app.listen(port);