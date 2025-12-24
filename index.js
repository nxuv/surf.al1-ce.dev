const express = require("express");
const path = require("path");

const app = express();

const bang = require("./bang.js");

app.use(express.json({limit: '50mb'}));

app.all("*", (req, res) => {
    console.log(req.path);
    console.log(req.query);
    if (req.path == "/" && !req.query.q) return res.sendFile(path.join(__dirname, "public/index.html"));
    if (req.query.q) bang.redirect(req, res);
    return res.send("Missing query parameter.");
});

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
})

module.exports = app;
