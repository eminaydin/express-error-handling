const express = require("express");
let router = express.Router();
const myHobbies = ["piano", "football", "basketball"];
router
    .route("/about")
    .get((req, res) => {
        res.send("hi get /me/about")
    })
router
    .route("/hobbies")
    .get((req, res) => {
        res.send(myHobbies)
    })

router
    .route("/hobbies/:hobbieName")
    .get((req, res) => {
        console.log(JSON.stringify(req.query));
        const found = myHobbies.filter(hobby => hobby === req.params.hobbieName);
        if (found) {
            res.send("true")
        } else {
            res.send("false")
        }


    })


module.exports = router;