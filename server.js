const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api", router);

router.route("/users/:user_id")
    .all((req, res, next) => next())
    .get(function(req, res, next) {
        console.log(req.headers);
        console.log(req.params);
        let userId = req.params.user_id;
        if (!userId) {
            next(new Error("User not found"));
        } else {
            res.json({
                firstName: "John",
                lastName: "White"
            });
        }
    })
    .put((req, res, next) => next(new Error("Not Implemented")))
    .post((req, res, next) => next(new Error("Not Implemented")))
    .delete((req, res, next) => next(new Error("Not Implemented")));

let server = app.listen(8080, function() {
   let host = server.address().address;
   let port = server.address().port;
   
   console.log("Example app listening ", host, port); 
});