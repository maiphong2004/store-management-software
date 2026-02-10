const Product = require("../models/Product");

// Lấy toàn bộ sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { name, sku, price, stock_quantity } = req.body;
    const newProduct = await Product.create({
      name,
      sku,
      price,
      stock_quantity,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Lấy chi tiết 1 sản phẩm
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, { where: { id: id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      return res.status(200).json(updatedProduct);
    }
    throw new Error("Sản phẩm không tồn tại");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id: id } });
    if (deleted) return res.status(204).send("Đã xóa thành công");
    throw new Error("Sản phẩm không tồn tại");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
