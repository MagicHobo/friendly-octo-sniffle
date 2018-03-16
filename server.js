var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/src/index.html");
});

app.use(express.static(__dirname + "/src"));

app.listen(process.env.PORT || 3000);
