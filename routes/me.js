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
    .route("/hobbies/:hobbyName")
    .get((req, res) => {
        const found = myHobbies.filter(hobby => hobby === req.params.hobbyName)
        if (found.length === 0) {
            res.send(false)
        } else {
            res.send(true)
        }
    })


module.exports = router;