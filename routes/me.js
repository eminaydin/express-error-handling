const express = require("express");
let router = express.Router();


router
    .route("/about")
    .get((req, res) => {
        res.send("hi get /me/about")
    })
router
    .route("/hobbies")
    .get((req, res) => {
        res.send("hi hobbies")
    })

router
    .route("/hobbies/:hobbieName")
    .get((req, res) => {
        res.send("hi id" + req.params.hobbieName)
    })


module.exports = router;