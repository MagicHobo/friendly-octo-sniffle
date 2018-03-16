var express = require("express");
var app = express();
app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT || 3000);