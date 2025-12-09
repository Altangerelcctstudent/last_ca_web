const express = require("express");
const router = express.Router();
const db = require("../db");

// GET cart items
router.get("/", (req, res) => {
    const sql = `SELECT cart.id, products.title, products.price, products.image 
                 FROM cart 
                 JOIN products ON cart.product_id = products.id`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// ADD item to cart
router.post("/add", (req, res) => {
    const productId = req.body.product_id;
    db.query("INSERT INTO cart (product_id) VALUES (?)", [productId], (err) => {
        if (err) throw err;
        res.json({ message: "Added to cart" });
    });
});

// REMOVE item from cart
router.delete("/remove/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM cart WHERE id = ?", [id], (err) => {
        if (err) throw err;
        res.json({ message: "Removed from cart" });
    });
});

module.exports = router;
