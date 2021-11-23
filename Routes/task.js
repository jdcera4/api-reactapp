const express = require("express");
const router = express.Router();

module.exports = () => {
    router.get("/", async (req, res) => {
        try {
            const result = await getTasks();
            return res.json(result);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    })
    router.post("/", async (req, res) => {
        //code
    })
    router.put("/", async (req, res) => {
        //code
    })
    router.delete("/", async (req, res) => {
        //code
    })
}
