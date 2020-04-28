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
        const found = myHobbies.filter(hobby => hobby === req.params.hobbieName);

        if (found) {
            return res.send("true")
        } else {
            return res.send("false")
        }
    })


module.exports = router;