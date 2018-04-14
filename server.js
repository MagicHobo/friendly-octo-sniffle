var express = require("express");
var app = express();

app.use(express.static(__dirname + "/src"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/src/index.html");
});

<<<<<<< HEAD
app.listen(process.env.PORT || 6000);
=======
app.listen(process.env.PORT || 7000);
>>>>>>> 6893688c16ae5e98c559e202a02a178f37ce4b0c
