var express = require("express");
var app = express();
const router = require("./routers/user.routes");
const userModel = require('./models');

var bodyParser = require("body-parser");
/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));



//app.use("/", router);
app.use("/users", router);

app.use("/users", require("./controllers/user.controller")(userModel));

app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});
app.listen(8000);
console.log("Listening to PORT 8000");