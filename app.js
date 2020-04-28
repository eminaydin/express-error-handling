const express = require("express");
const app = express();
const port = process.env.port || 4443;
const me = require("./routes/me.js")

app.use(express.json());
app.use("/me", me)

app.get("/", (req, res) => {
    res.send("hello root")
})
app.listen(port, err => {
    if (err) {
        return console.log("error", err);
    }
    console.log(`Listening on port ${port}`);

})