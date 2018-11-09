const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/index.html"));
    });

<<<<<<< HEAD
    app.get("/view/", function(req, res) {
        // res.send("Hello!");
=======
    app.get("/view", function(req, res) {
        return "Hello";
>>>>>>> 4935d9b82016a30f840a10932aa2f58077a09a6d
        res.sendFile(path.join(__dirname, "./../public/view.html"));
        
    });
};