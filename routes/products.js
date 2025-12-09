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
// PUT update product
router.put("/:id", (req, res) => {
    console.log("PUT /api/products/" + req.params.id, req.body);
    const id = req.params.id;
    const { title, price } = req.body;

    const sql = "UPDATE products SET title = ?, price = ? WHERE id = ?";
    db.query(sql, [title, price, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product updated successfully" });
    });
});


module.exports = router;

