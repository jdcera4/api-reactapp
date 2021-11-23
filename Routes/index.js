const express = require("express");

const taskRoute = require("./task");

const router = express.Router();

module.exports = (() =>{
    router.get("/", (req, res) =>{
        res.sendStatus(200)
    })
    router.use("/task", taskRoute());
    return (router);
})
