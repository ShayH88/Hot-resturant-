const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/index.html"));
    });

    app.get("/view", function(req, res) {
        return "Hello";
        res.sendFile(path.join(__dirname, "./../public/view.html"));
        
    });
};