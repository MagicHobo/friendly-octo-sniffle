var express = require("express");
var app = express();
var port = 3000;

app.use(express.static(__dirname + "/src"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/src/index.html");
});

var listener = app.listen(process.env.PORT || port, () => {
    console.log(`App running at http://localhost:${listener.address().port}`);
});
