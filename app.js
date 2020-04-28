const express = require("express");
const app = express();
const port = process.env.port || 4442;
const me = require("./routes/me.js")

app.use(express.json());
app.use("/me", me)
app.use((req, res, next) => {
    const error = new Error("not found");
    error.status(404);
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: "Ohh, so sorry can not help you!"
        }
    })
})
app.get("/", (req, res) => {
    res.send("hello root")
})
app.listen(port, err => {
    if (err) {
        return console.log("error", err);
    }
    console.log(`Listening on port ${port}`);

})