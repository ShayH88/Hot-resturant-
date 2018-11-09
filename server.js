const express = require("express");
const app = express();
require("./routes/apiRoute.js")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("running"); 
});