const express = require("express");

const routes = require("./Routes")

const app = express();

const connection = require("./connection")

let port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1", routes())

app.listen(port, () => {
    console.log("go puto")
})
