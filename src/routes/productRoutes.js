const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct); // Dùng PATCH để cập nhật từng phần
router.delete("/:id", productController.deleteProduct);

module.exports = router;
