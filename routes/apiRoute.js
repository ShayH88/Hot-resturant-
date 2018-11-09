let reservations = require("../data/hot-reservations.js");
module.exports = function(app){
    app.get("/banana", (req, res) => {
        res.send(reservations);
    });
}
