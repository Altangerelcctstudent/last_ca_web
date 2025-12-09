const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all products
router.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
