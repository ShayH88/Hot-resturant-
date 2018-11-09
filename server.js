const express = require("express");
const app = express();

let htmlRoute = require("./routes/htmlRoute");

require("./routes/apiRoute.js")(app);
htmlRoute(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("running"); 
});
