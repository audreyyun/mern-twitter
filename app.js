const express = require("express");
const app = express(); //app object we want to configure

app.get("/", (req, res) => {
    res.send("Hello World!")
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});