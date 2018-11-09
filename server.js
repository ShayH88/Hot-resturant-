var express = require("express");
var htmlRoute = require("./routes/htmlRoute");

var app = express();

htmlRoute(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    
});

